const { getEmployeeHierarchyService } = require('../services/employeeService');

const getEmployeeHierarchy = async (req, res) => {
  try {
    const { id } = req.params;  
    console.log(`Fetching hierarchy for employee ID: ${id}`);
    
    const hierarchy = await getEmployeeHierarchyService(id);

    if (!hierarchy) {
      return res.status(404).json({ success: false, message: 'Employee not found' });
    }

    res.json({ success: true, hierarchy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getEmployeeHierarchy,
};
