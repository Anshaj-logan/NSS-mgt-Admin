const express = require('express')
const coordinatormodel = require('../models/coordinator')
const profileRouter = express.Router()
profileRouter.use(express.static('./public'))



profileRouter.get('/profile',async function (req, res){
    try{
        const data=await coordinatormodel.find();
        res.render('profile-view',{data})
    } catch (error) {

    }
})

profileRouter.post('/update_profile',function (req, res){
    console.log(req.body);
    let a=new Date();
    const data={

        name:req.body.name,
        profile_picture:req.body.photo,
        bio:req.body.bio,
        designation:req.body.designation,
        department:req.body.dprtmnt,
        academic_year:req.body.yr,
        date_of_birth:req.body.dob,
        contact_no:req.body.number,
        email:req.body.email,
        address:req.body.address,
        gender:req.body.gender,
    }
    coordinatormodel(data).save().then((data)=>{
        res.redirect('/profileRouter/profile')
        console.log(data)
    })
})

module.exports = profileRouter