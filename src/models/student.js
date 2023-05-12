const mongoose = require('mongoose')


const schema = mongoose.Schema

const studentSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    // name : {type:String},
    course : {type:String},
    semester : {type:String},
    acdamic_year : {type:String},
    activity : {type:String},
    dob : {type:String},
    phone_no : {type:String},
    email : {type:String},
    address:{type:String}
})

const studentmodel = mongoose.model('student_tb',studentSchema)

module.exports = studentmodel