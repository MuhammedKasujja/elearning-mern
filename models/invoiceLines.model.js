const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const invoiceLinesSchema = new Schema({
    itemID: { type: String, trim: true, required: true },
    amount: { type: String, trim: true, required: true },
}, {
    timestamps: true
});

const InvoiceLines = mongoose.model('InvoiceLines', invoiceLinesSchema);

module.exports = InvoiceLines;