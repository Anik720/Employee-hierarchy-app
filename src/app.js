const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(bodyParser.json());

app.use('/api', authRoutes);

app.use('/api', employeeRoutes); 

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

module.exports = app; 
