const express = require('express')
const studentmodel = require('../models/student')
const testmodel = require('../models/test')
const studentsRouter = express.Router()
studentsRouter.use(express.static('./public'))



studentsRouter.get('/view_reg_stud',function (req, res){
    res.render('students-view')
})



studentsRouter.get('/test_details',function (req, res){
    res.render('students-test')
})
studentsRouter.post('/add_test',function(req,res){
    console.log(req.body);
    let a=new Date();
    const data={

        testmode:req.body.mode,
        testlink:req.body.link,
        studentsdetails:req.body.stud_details,
        test_date_time:req.body.datetime,
        instructions:req.body.instrctns,
    }
    testmodel(data).save().then((data)=>{
        res.redirect('/view_test')
        console.log(data)
    })
})
studentsRouter.get('/view_test',async function(req, res){
    try{
        const data=await testmodel.find();
        res.render('student-test-view',{data})
    } catch (error) {

    }

})





studentsRouter.get('/mark_status',function (req, res){
    res.render('students-mark')
})
studentsRouter.post('/add_markstatus',function(req,res){
    console.log(req.body);
    let a=new Date();
    const data={

        mark:req.body.mark,
        
    }
    testmodel(data).save().then((data)=>{
        res.redirect('/mark_status/view_markstatus')
        console.log(data)
    })
})
studentsRouter.get('/view_markstatus',async function(req, res){
    try{
        const data=await testmodel.find();
        res.render('student-mark-view',{data})
    } catch (error) {

    }

})

module.exports = studentsRouter