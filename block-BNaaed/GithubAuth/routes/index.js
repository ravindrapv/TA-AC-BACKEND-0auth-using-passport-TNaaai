var express = require("express");
var router = express.Router();
var passport = require('passport');

var app = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/failure", (req, res) => {
  res.render("/failure");
});

router.get("/success", (req, res) => {
  res.render("/success");
});

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/failure",
    session: false,
  }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/success");
  }
);
module.exports = router;
