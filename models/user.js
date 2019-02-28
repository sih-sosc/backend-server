const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "user"
    }
});

module.exports = mongoose.model('Users', userSchema);