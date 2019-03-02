const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    contactIDs: {
        type: Array
    }
}, {
        timestamps: {
            createdAt: 'created_at'
        }
    });

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
    },
    contactLists: {
        type: Array
    }
});

module.exports = mongoose.model('Users', userSchema);