const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const studentSchema = new schema({
    
    stud_name : {type:String},
    course : {type:String},
    current_semester : {type:String},
    academic_year : {type:String},
    previous_activity : {type:String},
    date_of_birth : {type:String},
    contact_no : {type:String},
    email : {type:String},
})

const studentmodel = mongoose.model('student_tb',studentSchema)

module.exports = studentmodel