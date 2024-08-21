const sequelize = require('../models').sequelize;

const db = require('../models');

const User = db.User;

const Transaction = db.Transaction;

const Category = db.Category;

const frauddashboard = async (req, res) => {
     
    const fraudCount = await Transaction.count({
        where: {
            fraud: true
        }
    });

    const totalTransactionCount = await Transaction.count();

    const totalAmount = await Transaction.sum('amount');

    const fraudAmount = await Transaction.sum('amount', {
        where: {
            fraud: true
        }
    });

    const fraudPercentage = (fraudCount / totalTransactionCount) * 100;

    res.render('frauddashboard', {
        fraudCount,
        totalTransactionCount,
        totalAmount,
        fraudAmount,
        fraudPercentage
    });
}

module.exports = {
    frauddashboard
};