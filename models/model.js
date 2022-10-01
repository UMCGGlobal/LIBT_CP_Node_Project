const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    student: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    email: {
        required: false,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    course: {
        required: true,
        type: String
    },
    issuedDate: {
        required: false,
        type: String
    },
    expireDate: {
        required: false,
        type: String
    }


})

module.exports = mongoose.model('Data', dataSchema)
