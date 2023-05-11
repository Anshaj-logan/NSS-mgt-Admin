const mongoose = require('mongoose')


const schema = mongoose.Schema

const postSchema = new schema({
    
    title : {type:String},
    image : {type:String},
    description : {type:String},
    

})

const postmodel = mongoose.model('post_tb',postSchema)

module.exports = postmodel