const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const countriesSchema = new Schema({
    name: { type: String, required: true, trim: true },
    symbol: { type: String, required: true },
    prefix: { type: Boolean, default: false },
    useDecimals: { type: Boolean, default: false},

}, {
    timestamps: true
});

const Countries = mongoose.model('Countries', countriesSchema);

module.exports = Countries;