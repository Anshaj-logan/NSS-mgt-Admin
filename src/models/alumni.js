const mongoose = require('mongoose')


const schema = mongoose.Schema

const alumniSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name : {type:String},
    // vol_photo : {type:String},
    phone_no : {type:String},
    email : {type:String},
    dob : {type:String},
    passout : {type:String},
    department : {type:String},
    course : {type:String},
    activity : {type:String},
    address : {type:String},
    acdamic_year:{type:String},
    
})

const alumnimodel = mongoose.model('alumni_tb',alumniSchema)

module.exports = alumnimodel