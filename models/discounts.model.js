const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const discountsSchema = new Schema({
    discountAmount: { type: Number,  required: true },
    clientID: { type: String, trim: true, required: true },
    dateStart: { type: Date, trim: true, required: true },
    dateStop: { type: Date, trim: true, required: true },
    administratorID: { type: String },
}, {
    timestamps: true
});

const Discounts = mongoose.model('Discounts', discountsSchema);

module.exports = Discounts;