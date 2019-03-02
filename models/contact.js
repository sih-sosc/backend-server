const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    created_by: {
        type: String,
        required: true
    }
},{
    timestamps:{
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model('Contact', contactSchema);