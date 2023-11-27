// controllers/authController.js
const Student = require('../models/studentModel');

const login = async (req, res) => {
  const { username, eamcetRank } = req.body;

  try {
    const student = await Student.findOne({ where: { username, eamcetRank } });

    if (student) {
      // Successful login
      res.status(200).json({ success: 'Login successful' });
    } else {
      // Login failed, no matching record found
      res.status(401).json({ error: 'Login failed: Rank is not matched' });
    }
  } catch (error) {
    console.error('Database query error: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { login };
