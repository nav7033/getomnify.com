const mongoose = require('mongoose')


const eventSchema= new mongoose.Schema({
    event:{
        type:String,
        unique:true,
        trim:true
    },
    description:{
        type:String
    },
    startTime:{
        type:String     
    },
    endTime:{
        type:String
    },
    weekDay:{
        type:String
    },
    email:{
       type:String 
    }
   

},{timestamps:true})

module.exports = mongoose.model("event",eventSchema)