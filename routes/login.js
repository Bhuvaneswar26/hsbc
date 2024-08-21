const express = require("express");

const router = express.Router();

const {getlogin,postlogin,logout } = require("../controllers/login");

const {homedashboard } = require("../controllers/homedashboard");

const  {frauddashboard} = require("../controllers/frauddashboard");

const {genderdashboard} = require("../controllers/genderdashboard");

const {amountdashboard} = require("../controllers/amountdashboard");

const {categorydashboard} = require("../controllers/categorydashboard");

router.get("/login", getlogin);

router.post("/login", postlogin);

router.get("/logout", logout);


router.get("/dashboard", homedashboard);

router.get("/frauddashboard", frauddashboard);

router.get('/genderdashboard', genderdashboard);

router.get('/amountdashboard', amountdashboard);

router.get('/categorydashboard', categorydashboard);


module.exports = router;


