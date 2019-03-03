const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created_by: {
        type: String
    },
    contactIDs: {
        type: [String]
    }
}, {
        timestamps: {
            createdAt: 'created_at'
        }
    });

module.exports = mongoose.model('contactLists', contactListSchema);