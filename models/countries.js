'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Countries.init({
    name: DataTypes.STRING,
    sortname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Countries',
  });
  return Countries;
};