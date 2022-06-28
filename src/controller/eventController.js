const eventSchema = require('../model/eventModel');
const schedules = require('../model/scheduleSchema')
const moment = require('moment');

const createEvent = async function (req, res) {
    try {
        const data = req.body;

        let start = moment();
        let end = moment().add(90, 'd');

        var schedule = [];
        let tmp = start.clone().day(data.week_day);
        if (tmp.isAfter(start, 'd')) {
            schedule.push(tmp.format('YYYY-MM-DD'));
        }
        while (tmp.isBefore(end)) {
            tmp.add(7, 'days');
            schedule.push(tmp.format('YYYY-MM-DD'));
        }

        data.email = req.email;

        const Obj = {
            schedules: schedule,
            event: data.event,
            start_time: data.start_time,
            end_time: data.end_time,
            email: data.email
        }

        const dataRes = await eventSchema.create(data);
        await schedules.create(Obj);
        return res.status(201).send({status: true,message: 'Event created successfully !',data: dataRes});
    }
    catch (error) {
        if (error.code == 11000) {
            return res.status(400).send({status: false,message: 'Duplicate event'});
        }
        return res.status(500).send({ status: false,message: error.message});
    }
}

const deleteEvent = async function (req, res){
    const data = req.body;
    try {
        const deleteEvent = await eventSchema.deleteOne(data);
        const deleteSchedule = await scheduleSchema.deleteOne(data);
        if (deleteEvent.deletedCount) {return res.status(200).send({status: true, msg: 'Delete success'});
        }
    } 
    catch (err) {
        return res.status(500).send({status: false,msg: err.message});
    }
}


module.exports.createEvent = createEvent
module.exports.deleteEvent = deleteEvent