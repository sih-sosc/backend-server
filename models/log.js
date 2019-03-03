const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema ({
    campaign_id: {
        type: String,
        required: true
    },
    contact_id: {
        type: String,
        required: true
    },
    read: {
        type: Boolean
    }
});

module.exports = mongoose.model('Logs', logSchema);