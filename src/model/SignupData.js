// Accessing Mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/library');


//Schema Definition
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    firstname : String,
    lastname : String,
    mobile : String,
    email : String,
    passwrd: String,
    cnfpasswrd: String
});


//Model creation 
var SignupData = mongoose.model('signupdata',SignupSchema);

module.exports = SignupData;