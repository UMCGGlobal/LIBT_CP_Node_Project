const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
        course: req.body.course,
        issuedDate: req.body.issuedDate,
        expireDate: req.body.expireDate,
        student: req.body.student,
        isDelete: req.body.isDelete,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    //res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by StudentID Method
router.get('/getOneStudent/:student', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await Model.findOne({ student: req.params.student });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
