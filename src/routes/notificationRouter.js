const express = require('express')
const notificationmodel = require('../models/student')
const notificationRouter = express.Router()
notificationRouter.use(express.static('./public'))



notificationRouter.get('/notification-view',function (req, res){
    res.render('Notification-view')
})

module.exports = notificationRouter