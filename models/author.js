const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Create Schema
var AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    maximunlength: 100,
  },
  family_name: {
    type: String,
    required: true,
    maximunlength: 100,
  },
  date_of_birth: {
    type: Date,
  },
  date_of_death: {
    type: Date,
  },
});

AuthorSchema.virtual("name").get(function () {
  var fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.first_name}, ${this.family_name}`;
  }
  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);
