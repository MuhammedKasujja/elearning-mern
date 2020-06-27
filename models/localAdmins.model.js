const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const localAdminsSchema = new Schema({
    schoolID: { type: Number, required: true },
    userID: { type: Number, required: true },
    jobTitle: { type: String, required: true },
    officePhone: { type: String, },
    officeFax: { type: String,},
    active: { type: Boolean, default: false },

}, {
    timestamps: true
});

const LocalAdmins = mongoose.model('LocalAdmins', localAdminsSchema);

module.exports = LocalAdmins;