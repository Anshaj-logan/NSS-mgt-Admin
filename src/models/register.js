const mongoose = require('mongoose')


const schema = mongoose.Schema

const registerSchema = new schema({
    name : {type:String},
    designation : {type:String},
    department : {type:String},
    academic_year : {type:String},
    contact_no : {type:String},
    email : {type:String},
    date_of_birth : {type:String},
    gender : {type:String},
    address : {type:String},
    identity_proof : {type:String},
})

const registermodel = mongoose.model('register_tb',registerSchema)

module.exports = registermodel