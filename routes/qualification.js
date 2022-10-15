const express = require('express');
const Model = require('../models/qualification');
const qualification = express.Router();

qualification.get('/getAll', async (req, res) => {
    //res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

qualification.post('/post', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const data = new Model({
        name: req.body.name,
        description: req.body.description,
        qualificationCode: req.body.qualificationCode,
        category: req.body.category,
        qualificationLevel: req.body.qualificationLevel,
        l4modules: req.body.l4modules,
        l5modules: req.body.l5modules,
        l7modules: req.body.l7modules,
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


//Get by ID Method
qualification.get('/getOne/:id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// qualification.put('/update/:id', async (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     // delete by id and create new
//     try {
//         const id = req.params.id;
//         console.log("id  ;;;;;;;;;;;;;; " + id);
//         Model.find({ id: id }).remove().exec();
//         const data = new Model({
//             name: req.body.name,
//             description: req.body.description,
//             qualificationCode: req.body.qualificationCode,
//             category: req.body.category,
//             qualificationLevel: req.body.qualificationLevel,
//             l4modules: req.body.l4modules,
//             l5modules: req.body.l5modules,
//             l7modules: req.body.l7modules,
//             isDelete: req.body.isDelete,

//         })
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }


// });

//Update by ID Method
qualification.put('/update/:id', async (req, res) => {
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
qualification.delete('/delete/:id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const id = req.params.id;
        Model.find({ id: id }).remove().exec();
        res.send(`Document with ${id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = qualification;