const sequelize  = require('../models').sequelize;

const db = require('../models');
const User = db.User;
const Transaction = db.Transaction;
const Category = db.Category;

const categorydashboard = async (req, res) => {
   //finding categories and respective fraud count in transactions and store in object as cat:fraudcount
    const categoryFraudCount = await Category.findAll({
      include: [{
         model: Transaction,
         attributes: ['fraud'],
      }],
    });

    let catFraudCount = {};

    categoryFraudCount.forEach((category) => {
      let fraudCount = 0;
      category.Transactions.forEach((transaction) => {
        if (transaction.fraud) {
          fraudCount++;
        }
      });
      catFraudCount[category.category] = fraudCount;
    });
     //cat vs transaction count in object
    const categoryTransactionCount = await Category.findAll({
      include: [{
        model: Transaction,
        attributes: ['id'],
      }],
    });
    let catTransactionCount = {};
    categoryTransactionCount.forEach((category) => {
      catTransactionCount[category.category] = category.Transactions.length;
    });

    //cat vs total amount in object

    const categoryTotalAmount = await Category.findAll({

      include: [{

        model: Transaction,

        attributes: ['amount'],

      }],

    });
    let catAmount = {};
    categoryTotalAmount.forEach((category) => {
      let totalAmount = 0;
      category.Transactions.forEach((transaction) => {
        totalAmount += transaction.amount;
      });

      catAmount[category.category] = totalAmount;
    });

    res.render('categorydashboard', { catFraudCount, catTransactionCount, catAmount });
}

module.exports = {
    categorydashboard
};

