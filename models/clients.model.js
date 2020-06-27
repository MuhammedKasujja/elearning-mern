const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clientsSchema = new Schema({
    schoolID: { type: String, required: true },
    userID: { type: String, required: true },

}, {
    timestamps: true
});

const Clients = mongoose.model('Clients', clientsSchema);

module.exports = Clients;