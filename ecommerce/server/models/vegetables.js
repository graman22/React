const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

module.exports = mongoose.model('Vegetable', vegSchema);
