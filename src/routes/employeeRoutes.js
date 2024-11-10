const express = require('express');
const { getEmployeeHierarchy } = require('../controller/employeeController');
const { Employee } = require('../models');
const { authenticateJWT } = require('../middleware/auth');
const router = express.Router();


router.get('/employees/:id', getEmployeeHierarchy);
router.get('/employees', authenticateJWT, async (req, res) => {
    try {
      const employees = await Employee.findAll();
  
      if (!employees || employees.length === 0) {
        return res.status(404).json({ message: 'No employees found' });
      }
  
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
module.exports = router;
