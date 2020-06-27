const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const prepaidSchema = new Schema({
    clientID: { type: String, unique: true, trim: true, required: true },
    startDate: { type: Date, trim: true, required: true },
    finishDate: { type: Date, trim: true, required: true },
    serviceID: { type: String, default:null },

}, {
    timestamps: true
});

const Prepaid = mongoose.model('Prepaid', prepaidSchema);

module.exports = Prepaid;