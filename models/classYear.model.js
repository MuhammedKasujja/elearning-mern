const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classYearSchema = new Schema({
    countryID: { type: String },
    yearDescription: { type: String, trim: true, required: true },
    middleDate: { type: Date },
    endDate: { type: Date },
    startDate: { type: Date },

}, {
    timestamps: true
});

const ClassYear = mongoose.model('ClassYear', classYearSchema);

module.exports = ClassYear;