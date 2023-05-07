const express = require('express')
const campmodel = require('../models/camp')
const campRouter = express.Router()
campRouter.use(express.static('./public'))



campRouter.get('/camp',function (req, res){
    res.render('camp-details')
})

module.exports = campRouter