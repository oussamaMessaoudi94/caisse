const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userShema = mongoose.Schema({
    firstName : String,
    lastName : String,
    numberPhone : String,
    password : String,
    img : String
});

userShema.plugin(uniqueValidator);

const user = mongoose.model('user', userShema);

module.exports = user ;