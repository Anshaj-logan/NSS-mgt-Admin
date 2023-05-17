const mongoose = require('mongoose')


const schema = mongoose.Schema

const AssignGroupSchema = new schema({
    
    
    issue_date : {type:String},
    due_date : {type:String},
    mark : {type:String},
    activity : {type:String},
    group_id : {type: mongoose.Types.ObjectId, ref: "Group_tb", required: true },
    status : {type:String},
})

const assigngroupmodel = mongoose.model('assigngroup_tb',AssignGroupSchema)

module.exports = assigngroupmodel