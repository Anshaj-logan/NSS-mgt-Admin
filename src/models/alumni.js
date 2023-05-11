const mongoose = require('mongoose')


const schema = mongoose.Schema

const alumniSchema = new schema({
    
    
})

const campmodel = mongoose.model('alumni_tb',alumniSchema)

module.exports = campmodel