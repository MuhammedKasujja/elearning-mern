const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schoolsSchema = new Schema({
    name: { type: String, trim: true, required: true },
    type: { type: String, trim: true, required: true },
    schoolLevel: { type: String, trim: true, required: true },
    address1: { type: String, trim: true, required: true },
    address2: { type: String, default: null },
    email: { type: String, default: null },
    postCode: { type: String, default: null },
    contact: { type: String, default: null },
    moto: { type: String, trim: true, required: true },
    paymentType: { type: String, default: null },
    accountNumber: { type: String, default: null },
    bankID: { type: String, default: null },
    shortCode: { type: String, default: null },
    active: { type: Boolean, default: true },
    officialID: { type: String, default: null },

}, {
    timestamps: true
});

const Schools = mongoose.model('Schools', schoolsSchema);

module.exports = Schools;