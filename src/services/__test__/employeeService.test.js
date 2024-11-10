const { getEmployeeHierarchyService } = require('../employeeService');
const { Employee } = require('../../models');

jest.mock('../../models', () => ({
  Employee: {
    findByPk: jest.fn(),
  },
}));

describe('Employee Service - getEmployeeHierarchyService', () => {
  it('should return employee hierarchy for a given ID', async () => {
    // Mock data to be returned by Sequelize's findByPk
    const mockEmployee = {
      id: 1,
      name: 'John Doe',
      positionId: 1,
      positionName: 'Manager',
      parentId: null,
      children: [
        {
          id: 2,
          name: 'Jane Smith',
          positionId: 2,
          positionName: 'Developer',
          parentId: 1,
        },
      ],
    };


    Employee.findByPk.mockResolvedValue(mockEmployee);

    const hierarchy = await getEmployeeHierarchyService(1);

    expect(hierarchy).toEqual(mockEmployee);
    expect(Employee.findByPk).toHaveBeenCalledWith(1, {
      include: [
        {
          model: Employee,
          as: 'children',
          include: [{ model: Employee, as: 'children' }],
        },
      ],
    });
  });

  it('should throw an error when no employee is found for the given ID', async () => {
    Employee.findByPk.mockResolvedValue(null);

    await expect(getEmployeeHierarchyService(999))
      .rejects
      .toThrow('Employee not found');
  });
});
