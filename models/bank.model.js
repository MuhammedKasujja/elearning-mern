const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bankSchema = new Schema({
    bankName: { type: String, unique: true, trim: true, required: true },
    countryID: { type: String, trim: true, required: true },
    address1: { type: String, trim: true, required: true },
    address2: { type: String, trim: true, required: true },
    postCode: { type: String, default:null },
    contact: { type: String, trim: true, required: true },
    email: { type: String, default:null },
    fax: { type: String , default:null},
    phone: { type: String , default:null},

}, {
    timestamps: true
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;