const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const attendenceSchema = new schema({
    

})

const campmodel = mongoose.model('attendence_tb',attendenceSchema)

module.exports = attendencemodel