const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const examQuestionsSchema = new Schema({
    examId: { type: String, unique: true, trim: true, required: true },
    question: { type: String },
    hasAttachments: { type: Boolean, default: false },
}, {
    timestamps: true
});

const ExamQuestions = mongoose.model('ExamQuestions', examQuestionsSchema);

module.exports = ExamQuestions;