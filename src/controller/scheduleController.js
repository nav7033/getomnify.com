const scheduleModel = require('../model/scheduleSchema')
const eventModel = require('../model/eventModel')



//=====================createSchedule=================================

const getSchedules = async function (req, res) {
    try {

        const token = req.query.token;

        const schedulesRes = await scheduleModel.find({ email: req.email });

        if (!schedulesRes) {
            return res.status(404).send({ status: false, message: 'Event not found' });
        }
        return res.status(200).send({ status: true, msg: 'Event found ', data: schedulesRes });




    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }

}
module.exports.getSchedules=getSchedules