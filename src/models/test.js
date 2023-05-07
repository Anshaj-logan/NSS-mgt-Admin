const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const testSchema = new schema({
    
    
    date : {type:String},
    testmode : {type:String},
    testlink : {type:String},
    studentsdetails : {type:String},
    test_date_time : {type:String},
    instructions : {type:String},
    mark : {type:String},
    status : {type:String},
})

const testmodel = mongoose.model('test_tb',testSchema)

module.exports = testmodel