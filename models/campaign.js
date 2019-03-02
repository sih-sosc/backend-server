const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    created_by: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    success: {
        type: String,
        required: true
    },
    template:{
        type: String
    },
    to: {
        type: String,
        required: true
    }
},{
    timestamps:{
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);