const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    qualificationCode: [{
        code: {
            required: true,
            type: String
        }
    }],
    category: {
        required: true,
        type: String
    },
    qualificationLevel: {
        required: true,
        type: String
    },
    l4modules: [
        {
            name: {
                required: false,
                type: String
            },
            code: {
                required: false,
                type: String
            }

        }
    ],
    l5modules: [
        {
            name: {
                required: false,
                type: String
            },
            code: {
                required: false,
                type: String
            }

        }
    ],
    l7modules: [
        {
            name: {
                required: false,
                type: String
            },
            code: {
                required: false,
                type: String
            }

        }
    ],
    isDelete: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('QualificationData', dataSchema)