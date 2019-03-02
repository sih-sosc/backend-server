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
        type: [String]
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
        type: [contactListSchema]
    },
    serviceEmail: {
        type: String,
        default: "None"
    },
    servicePassword: {
        type: String,
        default: "None"
    }
});

module.exports = mongoose.model('Users', userSchema);