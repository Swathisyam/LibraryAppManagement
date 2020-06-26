// // Accessing Mongoose package
const mongoose = require('mongoose');

// //Dtabase connection
mongoose.connect('mongodb://localhost:27017/library');


// //Schema Definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    title: String,
    awards: String,
    timeline : String,
    works : String,
    image : String
});


// //Model creation 
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;