const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const studyLengthSchema = new Schema({
    name: { type: String, required: true, trim: true },
    units: { type: Number, required: true },
    length: { type: Number },

}, {
    timestamps: true
});

const StudyLength = mongoose.model('StudyLength', studyLengthSchema);

module.exports = StudyLength;