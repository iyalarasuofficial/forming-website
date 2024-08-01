const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'contact'
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
    const sqle = "SELECT * From signup WHERE email =? ";
    const emailVlaue = req.body.email;
    try {
        const [row] = await pool.query(sqle, emailVlaue);
        if (!(row.length > 0)) {
            // res.json(row);
            try {
                const result = await insertData('signup', ['firstname', 'lastname', 'email', 'password'], values);
                res.json(result);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        } else {
            res.status(409).json({ error: 'email already exists' })
        }
    }
    catch (err) {
        res.status(500).json({ error: message });
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

app.listen(8081, () => {
    console.log("Server listening on port 8081...");
});

app.get('/', (req, res) => {
    res.send('This is your route');
  });
  
