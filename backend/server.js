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

// Establish a connection pool
const pool = mysql.createPool(dbConfig);

app.get('/', (req, res) => {
    res.send("okkkkk");
});

async function getContacts() {
    const [rows] = await pool.query("SELECT * FROM contact");
    return rows;
}

app.get('/get/contact', async (req, res) => {
    try {
        const result = await getContacts();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/contact', async (req, res) => {
    const sql = "INSERT INTO contact (`firstname`, `lastname`, `email`, `phone`) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.phone
    ];

    try {
        const [result] = await pool.query(sql, values);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(8081, () => {
    console.log("Server listening on port 8081...");
});
