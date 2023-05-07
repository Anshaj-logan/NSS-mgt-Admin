const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const alumniSchema = new schema({
    
    
})

const campmodel = mongoose.model('alumni_tb',alumniSchema)

module.exports = campmodel