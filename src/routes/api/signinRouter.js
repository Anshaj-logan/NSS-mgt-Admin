const express = require('express')
const signinRouter = express.Router()
const bcrypt = require('bcryptjs')
const login = require('../../models/login')
const coReg = require('../../models/coordinator')
const volReg = require('../../models/volunteer')
const studentReg = require('../../models/student')
const alumniReg = require('../../models/alumni')


signinRouter.post("/", async (req, res) => {
    const { username, password } = req.body;
    console.log(username);

    try {
        const oldUser = await login.findOne({ username })
        if (!oldUser) return res.status(404).json({ success: false, error: true, message: "User doesn't Exist" })
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
        console.log("user", oldUser.status);

        if (!isPasswordCorrect) return res.status(400).json({ success: false, error: true, message: "Incorrect password" })

        if (oldUser.role === '1') {
            if(oldUser.status === '0'){
                return res.status(400).json({ success: false, error: true,login_id: oldUser._id, message: "Waiting for admins approval" })
            }
            else{
                const coDetails = await coReg.findOne({ login_id: oldUser._id })
                console.log(coDetails);
                if (coDetails) {
                    return res.status(200).json({
                        success: true,
                        error: false,
                        username: oldUser.username,
                        role: oldUser.role,
                        status:oldUser.status,
                        login_id: oldUser._id,
                        student_id: coDetails._id
                    })
                }
            }
           
        }
        else if (oldUser.role === '2') {
            if(oldUser.status === '0'){
                return res.status(400).json({ success: false, error: true,login_id: oldUser._id, message: "Waiting for admins approval" })
            }
            else{
                const VolDetails = await volReg.findOne({ login_id: oldUser._id })
                console.log(VolDetails);
                if (VolDetails) {
                    return res.status(200).json({
                        success: true,
                        error: false,
                        username: oldUser.username,
                        role: oldUser.role,
                        status:oldUser.status,
                        login_id: oldUser._id,
                        vol_id: VolDetails._id
                    })
                }
            }
        }
        else if (oldUser.role === '3') {
            if(oldUser.status === '0'){
                return res.status(400).json({ success: false, error: true,login_id: oldUser._id, message: "Waiting for admins approval" })
            }
            else{
                const stdDetails = await studentReg.findOne({ login_id: oldUser._id })
                console.log(stdDetails);
                if (stdDetails) {
                    return res.status(200).json({
                        success: true,
                        error: false,
                        username: oldUser.username,
                        role: oldUser.role,
                        status:oldUser.status,
                        login_id: oldUser._id,
                        worker_id: stdDetails._id
                    })
                }
            }
        }  
        else if (oldUser.role === '4') {
            if(oldUser.status === '0'){
                return res.status(400).json({ success: false, error: true,login_id: oldUser._id, message: "Waiting for admins approval" })
            }
            else{
                const almDetails = await alumniReg.findOne({ login_id: oldUser._id })
                console.log(almDetails);
                if (almDetails) {
                    return res.status(200).json({
                        success: true,
                        error: false,
                        username: oldUser.username,
                        role: oldUser.role,
                        status:oldUser.status,
                        login_id: oldUser._id,
                        worker_id: almDetails._id
                    })
                }
            }
        }     
       
        else {

            return res.status(200).json({
                success: true,
                error: false,
                username: oldUser.username,
                login_id: oldUser._id,
                status:oldUser.status,
                role: oldUser.role,
            })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
})


module.exports = signinRouter

