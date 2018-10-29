const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegusersrefSchema = new Schema({
    uid: String,
    vid: String,
    quantity:Number,
    totprice:Number
    //,    description: String
});

module.exports = mongoose.model('VegUserXref', vegusersrefSchema);
