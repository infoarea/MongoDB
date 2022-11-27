

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    skill : {
        type : String,
        required : true,
        trim : true,
        enum : ["Mern Stack", "Larevel Devs", "Django Devs", "DSA Devs"]
    },
    gender : {
        type : String,
        required : true,
        enum : ["Male", "Female"],
        trim : true
    },
    location : {
        type : String,
        required : true,
        enum : ["Jatrabari", "Mirpur", "Uttara", "Gulshan"],
        trim : true
    },
    foods : {
        type : Array
    },
    isPassed : {
        type : Boolean,
        default : true
    }
}, {
    timestamps : true
});


//Create collection
module.exports = mongoose.model('User', userSchema )