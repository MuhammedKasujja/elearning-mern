const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pricelistSchema = new Schema({
    itemName: { type: String, unique: true, trim: true, required: true },
    itemDescription: { type: String, trim: true, required: true },
    itemUnit: { type: Number, trim: true, required: true },
    price: { type: Number },

}, {
    timestamps: true
});

const Pricelist = mongoose.model('Pricelist', pricelistSchema);

module.exports = Pricelist;