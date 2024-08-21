const express = require("express");

const router = express.Router();

const {getlogin,postlogin,logout } = require("../controllers/login");

const {homedashboard } = require("../controllers/homedashboard");

router.get("/login", getlogin);

router.post("/login", postlogin);

router.get("/logout", logout);


router.get("/dashboard", homedashboard);


module.exports = router;


