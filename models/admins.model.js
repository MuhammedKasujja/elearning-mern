const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const adminsSchema = new Schema({
    level: { type: String, required: true },
    userID: { type: String, required: true },

}, {
    timestamps: true
});

const Admins = mongoose.model('Admins', adminsSchema);

module.exports = Admins;