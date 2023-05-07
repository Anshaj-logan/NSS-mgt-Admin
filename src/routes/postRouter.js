const express = require('express')
const postmodel = require('../models/student')
const postRouter = express.Router()
postRouter.use(express.static('./public'))



postRouter.get('/post_upload',function (req, res){
    res.render('Post-upload')
})

module.exports = postRouter