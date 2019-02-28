const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema ({
    id: {
        type: String,
        unique: true,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    success: {
        type: boolean
    }
});

module.exports = mongoose.model('Logs', logSchema);