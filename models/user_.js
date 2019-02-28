const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _userSchema = new Schema({

});

module.exports = mongoose.model('Users', _userSchema);