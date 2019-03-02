const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    name : {
        type: String,
        required: true,
    },
    dept : {
        type: String,
        required: true
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
    createdBy: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contact', contactSchema);