const express = require('express')
const coordinatormodel = require('../models/coordinator')
const volunteersRouter = express.Router()
volunteersRouter.use(express.static('./public'))



volunteersRouter.get('/approve_vol',function (req, res){
    res.render('volunteers-approve')
})
volunteersRouter.get('/view_vol',function (req, res){
    res.render('volunteers-view')
})
volunteersRouter.get('/attendence',function (req, res){
    res.render('volunteers-attendence')
})
volunteersRouter.get('/ind_activity',function (req, res){
    res.render('volunteers-ind-activity')
})
volunteersRouter.get('/grp_activity',function (req, res){
    res.render('volunteers-grp-activity')
})


module.exports = volunteersRouter