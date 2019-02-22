//Model for User
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email : {
        type: String,
        required: true,
        unique: true
    },
    full_name : {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    permissions: {
        manage_user: {
            type: Boolean,
            default: false
        },
        send_email: {
            type: Boolean,
            default: false
        },
        send_sms: {
            type: Boolean,
            default: false
        },
        manage_service: {
            type: Boolean,
            default: false
        },
        manage_logs: {
            type: Boolean,
            default: false
        }
    }
});

module.exports = mongoose.model('Users',userSchema);