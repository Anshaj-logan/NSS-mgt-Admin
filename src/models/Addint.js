const mongoose = require('mongoose')


const schema = mongoose.Schema

const intSchema = new schema({
    
    
    date : {type:String},
   
    link : {type:String},
    students_id : {type:String},
    time : {type:String},
    instructions : {type:String},
    mark : {type:String},
    status : {type:String},
})

const intmodel = mongoose.model('addint_tb',intSchema)

module.exports = intmodel