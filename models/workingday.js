'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Employee, { through: 'UserWorkingDays', foreignKey: 'workingDayId', as: 'employees' })
    }
  }
  WorkingDay.init({
    week_day: DataTypes.STRING,
    working_date: DataTypes.DATE,
    is_working: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'WorkingDay',
  });
  return WorkingDay;
};