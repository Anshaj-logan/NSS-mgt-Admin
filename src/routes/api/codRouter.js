const express = require('express')
const student = require('../../models/student')
const test = require('../../models/Addtestdetails')
const interview = require('../../models/Addint')







const codRouter = express.Router()

codRouter.get('/view-students', (req, res) => {
    student.find()
        .then((data) => {
            res.status(200).json({
                success: true,
                error: false,
                data: data
            })
        })
        .catch(err => {
            return res.status(401).json({
                message: "something wrong"
            })
        })

})
codRouter.post('/add-test', async (req, res) => {

    try {
        const { login_id, students_id, date, time,link,instructions,mark,status} = req.body
        console.log(req.body);

        const result = await test.create({  login_id, students_id, date, time,link,instructions,mark,status:"0"  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Test Added", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})
codRouter.post('/add-interview', async (req, res) => {

    try {
        const { login_id, students_id, date, time,link,instructions,mark,status} = req.body
        console.log(req.body);

        const result = await interview.create({  login_id, students_id, date, time,link,instructions,mark,status:"0"  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Interview Added", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})

module.exports = codRouter