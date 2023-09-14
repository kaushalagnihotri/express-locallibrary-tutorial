var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var catalogRouter = require("./routes/catalog");

var wiki = require("./wiki.js");

var app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
const { error } = require("console");
mongoose.set("strictQuery", false);
const mongoDB =
  "mongodb+srv://kumarkaushal:RbR8eSsbv6ABw2cI@cluster0.x0eexe4.mongodb.net/?retryWrites=true&w=majority";

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
//   console.log("Database connected successfully")
// }

mongoose
  .connect(
    "mongodb+srv://kumarkaushal:RbR8eSsbv6ABw2cI@cluster0.x0eexe4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch(console.log);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);

app.use("/wiki", wiki);

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
