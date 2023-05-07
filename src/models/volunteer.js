const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const volunteerSchema = new schema({
    vol_name : {type:String},
    vol_photo : {type:String},
    contact_no : {type:String},
    email : {type:String},
    date_of_birth : {type:String},
    place : {type:String},
    department : {type:String},
    course : {type:String},
    current_semester : {type:String},
    activity_details : {type:String},
    username : {type:String},
    password : {type:String},
})

const volunteermodel = mongoose.model('volunteer_tb',volunteerSchema)

module.exports = volunteermodel