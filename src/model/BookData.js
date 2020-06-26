// // Accessing Mongoose package
const mongoose = require('mongoose');

// //Dtabase connection
mongoose.connect('mongodb://localhost:27017/library');


// //Schema Definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title : String,
    author : String,
    onyear: String,
    genre : String,
    image : String
});


// //Model creation 
var BookData = mongoose.model('bookdata',BookSchema);

module.exports = BookData;