const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const paymentsSchema = new Schema({
    invoiceID: { type: String, unique: true, trim: true, required: true },
    currencyID: { type: String, trim: true, required: true },
    amount: { type: Number, trim: true, required: true },
    paymentAcceptedBy: { type: Number },
    whoPaid: { type: String, trim: true, required: true },

}, {
    timestamps: true
});

const Payments = mongoose.model('Payments', paymentsSchema);

module.exports = Payments;