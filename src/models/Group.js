const mongoose = require('mongoose')


const schema = mongoose.Schema

const groupSchema = new schema({
   
    group_name : {type:String},
    status:{type:String}
   
    
})

const groupmodel = mongoose.model('Group_tb',groupSchema)

module.exports = groupmodel