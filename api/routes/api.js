var express = require("express");
var axios = require("axios");
var router = express.Router();
var jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

router.get("/auth", authenticateToken, function (req, res, next) {
  res.json({ auth: true });
});

module.exports = router;
