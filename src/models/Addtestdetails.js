const mongoose = require('mongoose')


const schema = mongoose.Schema

const testSchema = new schema({
    
    
    date : {type:String},
   
    link : {type:String},
    students_id : {type:String},
    time : {type:String},
    instructions : {type:String},
    mark : {type:String},
    status : {type:String},
})

const testmodel = mongoose.model('addtest_tb',testSchema)

module.exports = testmodel