const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderLineSchema = new Schema({
    itemID: { type: String, required: true },
    amount: { type: Number,  required: true },
}, {
    timestamps: true
});

const OrderLine = mongoose.model('OrderLine', orderLineSchema);

module.exports = OrderLine;