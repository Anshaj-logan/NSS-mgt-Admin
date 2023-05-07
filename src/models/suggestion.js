const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const suggestionSchema = new schema({
    
    date : {type:String},
    name : {type:String},
    suggestion : {type:String},
})

const suggestionmodel = mongoose.model('suggestion_tb',suggestionSchema)

module.exports = suggestionmodel