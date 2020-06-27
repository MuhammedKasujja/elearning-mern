const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const exchangeRateSchema = new Schema({
    currencyID: { type: Number, unique: true, trim: true, required: true },
    priceOfDollar: { type: Number, trim: true, required: true },
}, {
    timestamps: true
});

const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

module.exports = ExchangeRate;