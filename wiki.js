const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("About this wiki");
});

//handling exception in route function

// router.get("/about", async function(req, res, next) {
//   try{
//    const successfulresult = [];
//     res.render("users", {
//       title: "hello",
//       data : successfulresult[0]
//     })
//   }
//   catch(error){
//     return next(error);
//   }
// });


//handling error in route function 

// router.get("/about", (req, res, next) => {
//   About.find({}).exec((err, queryResults) => {
//     if (err) {
//       return next(err);
//     }
//     //Successful, so render
//     res.render("about_view", { title: "About", list: queryResults });
//   });
// });

module.exports = router;
