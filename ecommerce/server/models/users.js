const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String,
    is_admin:String
});

module.exports = mongoose.model('User', usersSchema);
