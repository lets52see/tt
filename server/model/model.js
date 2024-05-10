const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    level : String,
    project : String,
    help : String,
    work : String,
    free : String 
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;