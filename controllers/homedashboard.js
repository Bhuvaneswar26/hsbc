const sequelize  = require('../models').sequelize;

const db = require('../models');

const User = db.User;

const Transaction = db.Transaction;

const Category = db.Category;

const homedashboard = async (req, res) => {

    // let totalTransactions = await Transaction.count();
    // let totalUsers = await User.count();
    // let totalCategories = await Category.count();
    // let totalFrauds = await Transaction.count({ where: { fraud: true } });
    // let totalAmount = await Transaction.sum('amount');
    
    res.render('homedashboard');

};

module.exports = {
    homedashboard
};
