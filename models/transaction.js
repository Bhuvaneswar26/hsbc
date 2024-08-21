'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        foreignKey: 'customerId'
      });
      Transaction.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      });
      
    }
  }
  Transaction.init({
    customerId: DataTypes.STRING,
    merchantID: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    fraud: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};