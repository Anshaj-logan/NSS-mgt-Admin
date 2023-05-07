const express = require('express')
const suggestionmodel = require('../models/suggestion')
const suggestionRouter = express.Router()
suggestionRouter.use(express.static('./public'))



suggestionRouter.get('/suggestion',async function (req, res){
    try{
        const data=await suggestionmodel.find();
        res.render('suggestion',{data})
    } catch (error) {

    }
})

module.exports = suggestionRouter