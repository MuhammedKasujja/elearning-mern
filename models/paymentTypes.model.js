const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const paymentTypesSchema = new Schema({
    paymentType: { type: String, unique: true, trim: true, required: true },
    fee: { type: Number },
}, {
    timestamps: true
});

const PaymentTypes = mongoose.model('PaymentTypes', paymentTypesSchema);

module.exports = PaymentTypes;