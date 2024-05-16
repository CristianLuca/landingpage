

const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:   "admin",
    database: "ilcapitanos"
})
app.get('/', (req, res) => {
    return res.json("from backend");
})

app.post('/booking', (req, res) => {
    const sql = 
    'INSERT INTO booking (`first_name`, `last_name`, `email`, `phone`, `no_guests`, `date`, `time`, `message`) VALUES (?)';
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.phone,
        req.body.no_guests,
        req.body.date,
        req.body.time,
        req.body.message
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
})
app.get('/booking', (req, res) => {
    const q = "SELECT * FROM booking";
    db.query(q, (err, data) => {
        if (err) {
            return res.json('err');
        }
        return res.json(data);
    })
})
app.listen(8801, () => {
    console.log("Server is running on port 8800");
})