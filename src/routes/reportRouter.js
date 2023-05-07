const express = require('express')
// const postmodel = require('../models/student')
const reportRouter = express.Router()
reportRouter.use(express.static('./public'))



reportRouter.get('/report',function (req, res){
    res.render('Report')
})

module.exports = reportRouter