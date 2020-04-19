const mongoose = require('mongoose')
const validator = require('validator')


const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true

    },
    status: {
        type: Boolean,
        default: false
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
}, {
    timestamps: true
})

const task = mongoose.model('tasks', TaskSchema)

module.exports = task