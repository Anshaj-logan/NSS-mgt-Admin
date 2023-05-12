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
module.exports = volRouter