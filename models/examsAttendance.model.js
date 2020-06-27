const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const examsAttendanceSchema = new Schema({
    userId: { type: Number, trim: true, required: true },
    examId: { type: Number },
    attendanceStatus: { type: Number,},
}, {
    timestamps: true
});

const ExamsAttendance = mongoose.model('ExamsAttendance', examsAttendanceSchema);

module.exports = ExamsAttendance;