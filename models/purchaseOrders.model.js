const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const purchaseOrdersSchema = new Schema({
    clientID: { type: String, required: true },
    adminID: { type: String, trim: true, required: true },
    amount: { type: Number, trim: true, required: true },
    ValidUntil: { type: Date },
    Note: { type: String, trim: true,  },

}, {
    timestamps: true
});

const PurchaseOrders = mongoose.model('PurchaseOrders', purchaseOrdersSchema);

module.exports = PurchaseOrders;