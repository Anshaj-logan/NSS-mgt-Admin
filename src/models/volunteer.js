const mongoose = require('mongoose')


const schema = mongoose.Schema

const volunteerSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name : {type:String},
    // vol_photo : {type:String},
    phone_no : {type:String},
    email : {type:String},
    dob : {type:String},
    place : {type:String},
    department : {type:String},
    course : {type:String},
    semester : {type:String},
    activity : {type:String},
    acdamic_year:{type:String},
    address:{type:String}
    
})

const volunteermodel = mongoose.model('volunteer_tb',volunteerSchema)

module.exports = volunteermodel