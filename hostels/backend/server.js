// In your Node.js server code (e.g., server.js)
const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hostelstudent data"
});

// Establish the database connection
db.connect(err => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Database connected!');
  }
});

// Create an API endpoint for login
app.post('/api/login', (req, res) => {
  const { username, eamcetRank } = req.body;

  // Query the database to check if the username and EAMCET rank match
  const sql = 'SELECT * FROM students WHERE username = ? AND eamcetRank = ?';
  db.query(sql, [username, eamcetRank], (err, results) => {
    if (err) {
      console.error('Database query error: ', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      // No matching record found
      res.status(401).json({ error: 'Login failed: Rank is not matched' });
    } else {
      // Successful login
      res.status(200).json({ success: 'Login successful' });
    }
  });
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
