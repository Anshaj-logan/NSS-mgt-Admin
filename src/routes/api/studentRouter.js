const express = require('express');
const test = require('../../models/Addtestdetails');
const interview = require('../../models/Addint');



const studentRouter = express.Router()

studentRouter.get('/view-testdetails/:id', async (req, res) => {
    try {
        const id = req.params.id;
        test.find({ students_id
            : id, status:"0" })
            .then(function (data) {
                if (data == 0) {
                    
                    return res.status(401).json({
                        success: false,
                        error: true,
                        message: "No Data Found!"
                    })
                }
                else {
                    return res.status(200).json({
                        success: true,
                        error: false,
                        data: data
                    })
                }
            })
    } catch (error) {
        return res.status(200).json({
            success: true,
            error: false,
            message: "Something went wrong"
        })
    }


})
studentRouter.get('/view-intdetails/:id', async (req, res) => {
    try {
        const id = req.params.id;
        interview.find({ students_id
            : id, status:"0" })
            .then(function (data) {
                if (data == 0) {
                    
                    return res.status(401).json({
                        success: false,
                        error: true,
                        message: "No Data Found!"
                    })
                }
                else {
                    return res.status(200).json({
                        success: true,
                        error: false,
                        data: data
                    })
                }
            })
    } catch (error) {
        return res.status(200).json({
            success: true,
            error: false,
            message: "Something went wrong"
        })
    }


})
module.exports = studentRouter