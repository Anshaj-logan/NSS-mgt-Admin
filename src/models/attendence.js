const mongoose = require('mongoose')


const schema = mongoose.Schema

const attendenceSchema = new schema({
    

})

const campmodel = mongoose.model('attendence_tb',attendenceSchema)

module.exports = attendencemodel