const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreschema = new Schema({
    name : {
        type : String,
        required : true,
        min_length : 3,
        max_length : 100
    }
    
})

genreschema.virtual("url").get(function (){
    return `/catalog/genre/${this._id}`;
})

module.exports = mongoose.model("genre",genreschema);