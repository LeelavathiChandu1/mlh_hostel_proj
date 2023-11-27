// models/studentModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eamcetRank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Add other fields here as needed
});

module.exports = Student;
