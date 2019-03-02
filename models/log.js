const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema ({
    campaign_id: {
        type: String,
        unique: true,
        required: true
    },
    contact_id: {
        type: String,
        unique: true,
        required: true
    },
    success: {
        type: Boolean
    }
});

module.exports = mongoose.model('Logs', logSchema);