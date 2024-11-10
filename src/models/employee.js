module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    positionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    indexes: [
      {
        fields: ['positionId'],
      },
      {
        fields: ['parentId'],
      },
    ],
  });


  Employee.hasMany(Employee, {
    as: 'children',
    foreignKey: 'parentId',
  });

  Employee.belongsTo(Employee, {
    as: 'manager',
    foreignKey: 'parentId',
  });

  return Employee;
};
