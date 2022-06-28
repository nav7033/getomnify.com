const express = require('express')
const router = express.Router()
const {createUser,logIn} = require('../controller/userController')
const {createEvent,deleteEvent}= require('../controller/eventController')
const {getSchedules}= require('../controller/scheduleController')
const {auth}= require('../middleware/auth')





router.post('/registration',createUser)
router.post('/logIn',logIn)
router.post('/event', auth, createEvent);
router.get('/schedules', auth, getSchedules);
router.delete('/deleteEvent', auth, deleteEvent);
module.exports = router 