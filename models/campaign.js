const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    total: {
        type: int,
        required: true
    },
    success: {
        type: int,
        required: true
    },
    template:{
        type: String
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);