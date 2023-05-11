const mongoose = require('mongoose')


const schema = mongoose.Schema

const suggestionSchema = new schema({
    
    date : {type:String},
    name : {type:String},
    suggestion : {type:String},
})

const suggestionmodel = mongoose.model('suggestion_tb',suggestionSchema)

module.exports = suggestionmodel