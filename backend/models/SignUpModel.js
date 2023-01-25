const mongoose = require('mongoose')
const signUpTemplate = new mongoose.Schema({
    //What u collect from the user: (the DataBases)
    fullName:{
        type:String,
        requrie:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('users', signUpTemplate )