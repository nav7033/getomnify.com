const mongoose = require('mongoose')


const scheduleSchema= new mongoose.Schema({
    schedules:[String],
    event:{
        type:String
    },
    startTime:{
        type:String
    },
    endTime:{
        type:String
    },
    email:{
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model("schedule",scheduleSchema)