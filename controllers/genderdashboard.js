const sequelize = require('../models').sequelize;

const { where } = require('sequelize');
const db = require('../models');

const User = db.User;

const Transaction = db.Transaction;

const Category = db.Category;


// controller to render the gender based analysis dashboard

const genderdashboard = async (req, res) => {

    // query

    const maleCount = await User.count({
        where : {
            gender:"M"
        }
    });

    const femaleCount = await User.count({
        where : {
            gender:"F"
        }
    });

    const totalUserCount = await User.count();

    res.render('genderdashboard', {maleCount,femaleCount,totalUserCount});

}

module.exports = {
    genderdashboard
};


