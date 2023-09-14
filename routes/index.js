var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// router.get("/index/cool", function (req, res, next) {
//   res.render("users", {
//     name: "kaushal",
//     lastname: "kumar",
//     dob: "15Aug1997",
//   });
// });

// GET home page.

router.get("/", function (req, res) {
  res.redirect("/catalog");
});


module.exports = router;
