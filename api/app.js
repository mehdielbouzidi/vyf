var createError = require("http-errors");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var axios = require("axios");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");
var jwt = require("jsonwebtoken");
var cheerio = require("cheerio");

require("dotenv").config();

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cookieParser("MY SECRET"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

var url = "/bos/j_security_check?j_username=";
let user = {};

app.post("/api", function (req, res) {
  return axios
    .post("http://192.168.30.79" + url + req.body.username + "&j_password=" + req.body.password)
    .then((resp) => {
      if (resp.headers["expires"]) {
        user = { name: req.body.username, password: req.body.password };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken: accessToken, auth: true, url: url + req.body.username + "&j_password=" + req.body.password });
      } else {
        res.json({ auth: false });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

// app.get("/api/opleidingstype", function (req, res) {
//   axios
//     .post("http://192.168.30.79/bos/j_security_check?j_username=" + user.name + "&j_password=" + user.password)
//     .then((res) => {
//       axios
//         .get("http://192.168.30.79/bos/stam/financieel/opleidingstype-overzicht.jsf")
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

app.post("/bos/Logout", function (req, res) {
  res.send("");
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
