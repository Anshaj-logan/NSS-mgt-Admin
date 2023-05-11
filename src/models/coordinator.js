const mongoose = require('mongoose')


const schema = mongoose.Schema

const coordinatorSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name : {type:String},
    // profile_picture : {type:String},
    about: {type:String},
    designation : {type:String},
    department : {type:String},
    academic_year : {type:String},
    dob : {type:String},
    phone_no : {type:String},
    email : {type:String},
    address : {type:String},
    // gender : {type:String},
    
})

const coordinatormodel = mongoose.model('coordinator_tb',coordinatorSchema)

module.exports = coordinatormodel