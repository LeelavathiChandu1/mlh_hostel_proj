const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const express = require('express');
const cors = require('cors'); // Import the cors middleware

// const app = express();

// Use the cors middleware to enable CORS for all routes
app.use(cors());
const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hostelstudent data',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
    return;
  }
  console.log('Connected to the database');
});

// API endpoint for login
app.get('Booking/Login', (req, res) => {
  const { username, eamcetRank } = req.body;

  // Query the database to check if the user exists and ranks match
  const query = 'SELECT * FROM students WHERE username = ? AND eamcetRank = ?';

  db.query(query, [username, eamcetRank], (err, results) => {
    if (err) {
      console.error('Database query failed: ', err);
      console.log("error")
      res.status(500).json({ success: false, message: 'Database query failed' });
      return;
    }

    if (results.length === 1) {
      // Login successful
      res.json({ success: true });
      console.log("login sucess")
    } else {
      // Login failed
      res.status(401).json({ success: false, message: 'Login failed' });
      console.log("login fail")
    }
  });
});

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
