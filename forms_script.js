const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001; // Change this to your desired port

// Database connection configuration
const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'jeet6969',
    database: 'portal_db'
};

// Create a database connection
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Serve static files (including your HTML form)
app.use(express.static('public'));

// Handle form submissions
app.use(express.urlencoded({ extended: true }));
app.post('/submit', (req, res) => {
    const { student_name, student_sap_id, student_email, student_domain, student_hours } = req.body;

    const sql = 'INSERT INTO form_responses (student_name, student_sap_id, student_email, student_domain, student_hours) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [student_name, student_sap_id, student_email, student_domain, student_hours], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
        } else {
            console.log('Data inserted successfully');
            res.status(200).send('Form submitted successfully');
        }
    });

    console.log('Received name:', student_name);
    // console.log('Received email:', email);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// Route to fetch data from the database
// app.get('/getData', (req, res) => {
//     const sql = 'SELECT * FROM form_responses';
//     connection.query(sql, (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             res.status(500).json({ error: 'Error fetching data' });
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });