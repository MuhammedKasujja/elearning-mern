const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const examOptionsSchema = new Schema({
    questionID: { type: String, required: true },
    optionNumber: { type: Number, required: true },
    optionText: { type: String, trim: true, required: true },
    optionAttachment: { type: String, trim: true,},

}, {
    timestamps: true
});

const ExamOptions = mongoose.model('ExamOptions', examOptionsSchema);

module.exports = ExamOptions;