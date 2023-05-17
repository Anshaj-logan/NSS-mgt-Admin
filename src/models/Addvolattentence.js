const mongoose = require('mongoose')


const schema = mongoose.Schema

const volattenteceSchema = new schema({
    
    
    date : {type:String},
   
    attentence : {type:String},
    vol_id : {type:String},
   
    status : {type:String},
})

const volAttentencemodel = mongoose.model('addvolattentence_tb',volattenteceSchema)

module.exports = volAttentencemodel