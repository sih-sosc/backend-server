const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    type_of_Service: {
        type: String
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    auth_key: {
        type: String
    }
});

module.exports = mongoose.model('Services', serviceSchema);