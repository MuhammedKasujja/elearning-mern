const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const holidaysSchema = new Schema({
    schoolID: { type: Number, required: true },
    classYearID: { type: Number, required: true },
    startDate: { type: Date, required: true },
    finishDate: { type: Date, required: true },

}, {
    timestamps: true
});

const Holidays = mongoose.model('Holidays', holidaysSchema);

module.exports = Holidays;