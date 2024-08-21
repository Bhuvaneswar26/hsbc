const db = require('../models');
const User = db.User;
const Transaction = db.Transaction;
const Category = db.Category;  // Corrected typo

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const filePath = path.join(__dirname, '../HSBC.csv');

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', async function (data) {
    try {
      // Check if the user already exists
      let user = await User.findOne({ where: { customerId: data.customer } });
      if (!user) {
        user = await User.create({
          customerId: data.customer,
          gender: data.gender,
          age: data.age,
          zipCode: data.zipcode,
        });
      }

      // Check if the category already exists
      let category = await Category.findOne({ where: { categoryName: data.category } });
      if (!category) {
        category = await Category.create({
          categoryName: data.category,
        });
      }

      // Create the transaction
      const transaction = await Transaction.create({
        customerId: user.customerId,      // Corrected to reference user's ID
        merchantID: data.merchant,
        categoryId: category.id,  // Corrected to reference category's ID
        amount: data.amount,
        fraud: data.fraud,
      });

      console.log(user);
      console.log(category);
      console.log(transaction);
    } catch (err) {
      console.log(err);
    }
  })
  .on('end', function () {
    console.log('CSV file successfully processed');
  });
