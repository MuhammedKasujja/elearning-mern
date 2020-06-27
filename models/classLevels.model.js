const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classLevelsSchema = new Schema({
    classLevelName: { type: String, trim: true, required: true },

}, {
    timestamps: true
});

const ClassLevels = mongoose.model('ClassLevels', classLevelsSchema);

module.exports = ClassLevels;