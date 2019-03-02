const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    created_by: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
        timestamps: {
            createdAt: 'created_at'
        }

    });

module.exports = mongoose.model('Schedules', scheduleSchema);