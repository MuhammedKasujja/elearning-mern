const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const examsSchema = new Schema({
    teacherID: { type: String, trim: true, required: true },
    annualClassID: { type: String, trim: true, required: true },
    examTitle: { type: String, trim: true, required: true },
    examDatetime: { type: Date, trim: true, required: true },
    examDuration: { type: Number },
    totalQuestions: { type: Number, required: true },
    marksWrongAnswer: { type: Number },
    marksGoodAnswer: { type: Number },
    isPublic: { type: Boolean, default: false },
    examStatus: { type: String, default:'pending' },
    createdBy: { type: String, required: true },
}, {
    timestamps: true
});

const Exams = mongoose.model('Exams', examsSchema);

module.exports = Exams;