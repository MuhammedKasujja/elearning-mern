const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schoolLevelsSchema = new Schema({
    level: { type: String, required: true },

}, {
    timestamps: true
});

const SchoolLevels = mongoose.model('SchoolLevels', schoolLevelsSchema);

module.exports = SchoolLevels;