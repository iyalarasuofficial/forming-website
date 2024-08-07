require('dotenv').config(); // Add this line to load environment variables

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

const pool = mysql.createPool(dbConfig);

// Function to get data from a specific table
async function getData(table) {
    const [rows] = await pool.query(`SELECT * FROM ${table}`);
    return rows;
}

// Function to insert data into a specific table
async function insertData(table, columns, values) {
    const sql = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (?, ?, ?, ?)`;
    const [result] = await pool.query(sql, values);
    return result;
}

app.get('/contact', async (req, res) => {
    try {
        const result = await getData('contact');
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/signup', async (req, res) => {
    try {
        const result = await getData('signup');
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/contact', async (req, res) => {
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.phone,
    ];

    try {
        const result = await insertData('contact', ['firstname', 'lastname', 'email', 'phone'], values);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/signup', async (req, res) => {
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
    ];
    const sql = "SELECT * FROM signup WHERE email = ?";
    const emailValue = req.body.email;
    try {
        const [row] = await pool.query(sql, [emailValue]);
        if (row.length === 0) {
            try {
                const result = await insertData('signup', ['firstname', 'lastname', 'email', 'password'], values);
                res.json(result);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        } else {
            res.status(409).json({ error: 'Email already exists' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/login', async (req, res) => {
    const sql = "SELECT * FROM signup WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];

    try {
        const [rows] = await pool.query(sql, values);
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}...`);
});

app.get('/', (req, res) => {
    res.send('This is your route');
});
