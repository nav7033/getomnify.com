const mongoose = require('mongoose')


const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        trim:true
    }
},{timestamps:true})

module.exports = mongoose.model("user",userSchema)