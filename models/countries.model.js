const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const countriesSchema = new Schema({
    name: { type: String, required: true, trim: true },
    phonePrefix: { type: Number, required: true },
    currencyID: { type: String, required: true },
    vat: { type: Number, },

}, {
    timestamps: true
});

const Countries = mongoose.model('Countries', countriesSchema);

module.exports = Countries;