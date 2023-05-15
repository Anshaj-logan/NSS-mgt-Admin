const express = require('express')
const bcrypt = require('bcryptjs')
const login = require('../../models/login')
const coReg= require('../../models/coordinator')
const volReg = require('../../models/volunteer')
const studentReg = require('../../models/student')
const alumniReg = require('../../models/alumni')





const RegisterRouter = express.Router()

RegisterRouter.post('/coordinator', async (req, res) => {
    try {
        const userExists = await login.findOne({ username: req.body.username })


        if (userExists) {
            return res.status(400).json({ success: false, error: true, message: 'user already registered' })
        }
        console.log(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const oldPhone = await coReg.findOne({ phone_no: req.body.phone_no })
        if (oldPhone) {
            return res.status(400).json({ success: false, error: true, message: 'phone number already exists ' })
        }
        const oldEmail = await coReg.findOne({ email: req.body.email })
        if (oldEmail) {
            return res.status(400).json({ success: false, error: true, message: 'email already exists ' })
        }
        var log = {
            username: req.body.username,
            password: hashedPassword,
            role: 1,
            status: 0,
        }
        const result = await login(log).save()
        var reg = {
            login_id: result._id,
            name: req.body.name,
            email: req.body.email,
            department: req.body.department,
            phone_no: req.body.phone_no,
            about: req.body.about,
            designation: req.body.designation,
            academic_year: req.body.academic_year,
            dob: req.body.dob,
            address: req.body.address


        }
        const result2 = await coReg(reg).save()
        res.status(201).json({
            success: true, error: false,
            result: result2,
            message: 'Successfully Registered'
        })

    }
    catch (err) {
        res.status(500).json({ success: false, error: true, message: 'Something Went Wrong' })
        console.log(err)
    }
})

RegisterRouter.post('/volunteer', async (req, res) => {
    try {
        const userExists = await login.findOne({ username: req.body.username })


        if (userExists) {
            return res.status(400).json({ success: false, error: true, message: 'user already registered' })
        }
        console.log(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, 12)

        // const oldPhone = await volReg.findOne({ phone_no: req.body.phone_no })
        // if (oldPhone) {
        //     return res.status(400).json({ success: false, error: true, message: 'phone number already exists ' })
        // }
        const oldEmail = await volReg.findOne({ email: req.body.email })
        if (oldEmail) {
            return res.status(400).json({ success: false, error: true, message: 'email already exists ' })
        }
        var log = {
            username: req.body.username,
            password: hashedPassword,
            role: 2,
            status: 0,
        }
        const result = await login(log).save()
        var reg = {
            login_id: result._id,
            name :req.body.name, 
            semester:req.body.semester,
            phone_no:req.body.phone_no,
            place:req.body.place,
            email: req.body.email,
            dob:req.body.dob,
            activity:req.body.activity,
            course:req.body.course,
            acdamic_year:req.body.acdamic_year,
            department:req.body.department,
            address:req.body.address
            
            

        }
        const result2 = await volReg(reg).save()
        res.status(201).json({
            success: true, error: false,
            result: result2,
            message: 'Successfully Registered'
        })

    }
    catch (err) {
        res.status(500).json({ success: false, error: true, message: 'Something Went Wrong' })
        console.log(err)
    }
})
RegisterRouter.post('/student', async (req, res) => {
    try {
        const userExists = await login.findOne({ username: req.body.username })


        if (userExists) {
            return res.status(400).json({ success: false, error: true, message: 'user already registered' })
        }
        console.log(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, 12)

        // const oldPhone = await volReg.findOne({ phone_no: req.body.phone_no })
        // if (oldPhone) {
        //     return res.status(400).json({ success: false, error: true, message: 'phone number already exists ' })
        // }
        const oldEmail = await studentReg.findOne({ email: req.body.email })
        if (oldEmail) {
            return res.status(400).json({ success: false, error: true, message: 'email already exists ' })
        }
        var log = {
            username: req.body.username,
            password: hashedPassword,
            role: 3,
            status: 0,
        }
        const result = await login(log).save()
        var reg = {
            login_id: result._id,
            // name :req.body.name, 
            semester:req.body.semester,
            phone_no:req.body.phone_no,
            address:req.body.address,
            email: req.body.email,
            dob:req.body.dob,
            activity:req.body.activity,
            course:req.body.course,
            acdamic_year:req.body.acdamic_year
            
            

        }
        const result2 = await studentReg(reg).save()
        res.status(201).json({
            success: true, error: false,
            result: result2,
            message: 'Successfully Registered'
        })

    }
    catch (err) {
        res.status(500).json({ success: false, error: true, message: 'Something Went Wrong' })
        console.log(err)
    }
})
RegisterRouter.post('/alumni', async (req, res) => {
    try {
        const userExists = await login.findOne({ username: req.body.username })


        if (userExists) {
            return res.status(400).json({ success: false, error: true, message: 'user already registered' })
        }
        console.log(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, 12)

        // const oldPhone = await volReg.findOne({ phone_no: req.body.phone_no })
        // if (oldPhone) {
        //     return res.status(400).json({ success: false, error: true, message: 'phone number already exists ' })
        // }
        const oldEmail = await alumniReg.findOne({ email: req.body.email })
        if (oldEmail) {
            return res.status(400).json({ success: false, error: true, message: 'email already exists ' })
        }
        var log = {
            username: req.body.username,
            password: hashedPassword,
            role: 4,
            status: 0,
        }
        const result = await login(log).save()
        var reg = {
            login_id: result._id,
            name :req.body.name, 
            department:req.body.department,
            phone_no:req.body.phone_no,
            address:req.body.address,
            email: req.body.email,
            dob:req.body.dob,
            passout:req.body.passout,
            course:req.body.course,
            activity:req.body.activity,
            acdamic_year:req.body.acdamic_year
            
            

        }
        const result2 = await alumniReg(reg).save()
        res.status(201).json({
            success: true, error: false,
            result: result2,
            message: 'Successfully Registered'
        })

    }
    catch (err) {
        res.status(500).json({ success: false, error: true, message: 'Something Went Wrong' })
        console.log(err)
    }
})
module.exports = RegisterRouter

