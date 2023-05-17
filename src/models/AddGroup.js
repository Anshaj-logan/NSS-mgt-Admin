const mongoose = require('mongoose')


const schema = mongoose.Schema

const addgroupSchema = new schema({
    vol_id : {type:String},
    group_id : {type:String},
    status:{type:String}
   
    
})

const addgroupmodel = mongoose.model('AddGroup_tb',addgroupSchema)

module.exports = addgroupmodel