const sequelize = require('../models').sequelize;

const db = require('../models');

const User = db.User;

const Transaction = db.Transaction;

const Category = db.Category;

const  amountdashboard = async (req, res) => {

    const totalTransactionCount = await Transaction.count();

    const totalAmount = await Transaction.sum('amount');

    const averageAmount = await Transaction.sum('amount')/totalTransactionCount;

    const maxAmount = await Transaction.max('amount');

    const minAmount = await Transaction.min('amount');

    res.render('amountdashboard', {
        totalTransactionCount,
        totalAmount,
        averageAmount,
        maxAmount,
        minAmount
    });
}

module.exports = { amountdashboard };