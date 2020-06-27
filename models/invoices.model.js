const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const invoicesSchema = new Schema({
    currencyID: { type: String, required: true },
    clientID: { type: String, required: true },
    VAT: { type: String, trim: true, required: true },
    paymentType: { type: Number, required: true },
    adminID: { type: String },
    DateOrdered: { type: Date, required: true },
    DatePayable: { type: Date },
    Status: { type: Number, required: true },
    Note: { type: String },
    amount: { type: Number, required: true },
}, {
    timestamps: true
});

const Invoices = mongoose.model('Invoices', invoicesSchema);

module.exports = Invoices;