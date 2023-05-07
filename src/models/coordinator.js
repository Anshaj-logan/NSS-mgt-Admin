const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const coordinatorSchema = new schema({
    
    name : {type:String},
    profile_picture : {type:String},
    bio: {type:String},
    designation : {type:String},
    department : {type:String},
    academic_year : {type:String},
    date_of_birth : {type:String},
    contact_no : {type:String},
    email : {type:String},
    address : {type:String},
    gender : {type:String},
    username : {type:String},
    password : {type:String},
})

const coordinatormodel = mongoose.model('coordinator_tb',coordinatorSchema)

module.exports = coordinatormodel