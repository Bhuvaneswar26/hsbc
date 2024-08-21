var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const csrf = require("tiny-csrf");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");




var app = express();


const loginRouter = require('./routes/login');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser("ssh some key!"));
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }),
);


// CSRF token setup
const csrfProtection = csrf("123456789iamasecret987654321look", [
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
]);
app.use(csrfProtection);

app.use("/", loginRouter);




module.exports = app;
