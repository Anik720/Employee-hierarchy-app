const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');  
const EmployeeModel = require('./employee');  

const Employee = EmployeeModel(sequelize, DataTypes); 

const models = {
  Employee,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
