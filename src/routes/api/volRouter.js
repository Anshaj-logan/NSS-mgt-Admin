const express = require('express')
const volunteer = require('../../models/volunteer')


const volRouter = express.Router()

volRouter.get('/view-volunteer-profile/:id', (req, res) => {
    const id = req.params.id
    volunteer.findOne({ login_id: id })
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

})
volRouter.post('/update-volunteer-profile/:id', (req, res) => {
    const { name, activity, email, phone_no, acdamic_year,department,course,semester,dob,address } = req.body
    const id = req.params.id
    console.log(id);
    volunteer.updateOne({ login_id: id }, { $set: {  name, activity, email, phone_no, acdamic_year,department,course,semester,dob,address   } }).then((data) => {
        console.log(data);
        res.status(200).json({
            success: true,
            error: false,
            message: "Details updated"
        })

    }).catch(err => {
        return res.status(401).json({
            message: "Something went Wrong!"
        })
    })

})
module.exports = volRouter