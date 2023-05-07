const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sumayyathayyil:sumayya@cluster0.3eoptro.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema

const postSchema = new schema({
    
    title : {type:String},
    image : {type:String},
    description : {type:String},
    

})

const postmodel = mongoose.model('post_tb',postSchema)

module.exports = postmodel