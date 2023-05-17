const express = require('express')
const student = require('../../models/student')
const test = require('../../models/Addtestdetails')
const interview = require('../../models/Addint')
const volunteer = require('../../models/volunteer')
const volAttentence = require('../../models/Addvolattentence')
const group = require('../../models/Group')
const addgroup = require('../../models/AddGroup')
const assigngroup = require('../../models/AssignGroupActivity')












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
codRouter.get('/view-voluntiers', (req, res) => {
    volunteer.find()
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
codRouter.post('/add-volattentence', async (req, res) => {

    try {
        const { login_id, vol_id, date, attentence,status} = req.body
        console.log(req.body);

        const result = await volAttentence.create({  login_id, vol_id, date, attentence,status:"0"  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Attentence Added", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})
codRouter.post('/add-group', async (req, res) => {

    try {
        const { login_id, group_name, status} = req.body
        console.log(req.body);

        const result = await group.create({  login_id, group_name,status:"0"  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "New Group Added", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})
codRouter.get('/view-groups', (req, res) => {
    group.find()
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
codRouter.post('/add-to-group', async (req, res) => {

    try {
        const { login_id, vol_id,group_id, status} = req.body
        console.log(req.body);

        const result = await addgroup.create({  login_id, vol_id,group_id,status:"0"  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Volunteer Added to Group", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})
codRouter.post('/assign-group-activity', async (req, res) => {

    try {
        const { login_id, group_id,issue_date,due_date,activity,mark, status} = req.body
        console.log(req.body);

        const result = await assigngroup.create({  login_id, group_id,issue_date,due_date,activity,mark,status:"0"  })
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Group Activity Updated", details: result });
        }


    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Something went wrong" });
        console.log(error);
    }

})
codRouter.get('/view-groupactivity', (req, res) => {
    assigngroup.find()
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
codRouter.get('/view-activities', (req, res) => {
    assigngroup.aggregate([
        
        
            {
                '$lookup': {
                    'from': 'group_tbs', 
                    'localField': 'group_id', 
                    'foreignField': '_id', 
                    'as': 'result'
                }
            },
            {
                "$unwind":"$result"
            },
            {
                "$group":{
                    '_id':"$_id",
                    'issue_date':{"$first":"$issue_date"},
                    'due_date':{"$first":"$due_date"},
                    'mark':{"$first":"$mark"},
                    'activity':{"$first":"$activity"},
                    'group_name':{"$first":"$result.group_name"},
                    // 'established':{"$first":"$company.established"},
                    // 'contact':{"$first":"$company.contact"},
                    // 'location':{"$first":"$company.location"},
                }
            }
      ])
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

module.exports = codRouter