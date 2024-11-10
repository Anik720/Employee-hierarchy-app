const { Employee } = require('../models');

const getEmployeeHierarchyService = async (id) => {
  try {
    const employee = await Employee.findByPk(id, {
      include: [
        {
          model: Employee,
          as: 'children',
          include: [{ model: Employee, as: 'children' }],
        },
      ],
    });

    if (!employee) {
      throw new Error('Employee not found');
    }

    return employee;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getEmployeeHierarchyService,
};
