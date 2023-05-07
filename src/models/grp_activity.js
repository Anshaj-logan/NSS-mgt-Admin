const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const campSchema = new schema({
    
    academic_year : {type:String},
    location : {type:String},
    no_of_volunteers : {type:String},
    academic_year : {type:String},
    start_date : {type:String},
    end_date : {type:String},
    contact_number : {type:String},
    volunteer_details : {type:String},
    coordinators_details : {type:String},
})

const campmodel = mongoose.model('camp_tb',campSchema)

module.exports = campmodel