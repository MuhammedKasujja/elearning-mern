const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classStudentsSchema = new Schema({
    studentID: { type: String, required: true },
    classID: { type: String, trim: true, required: true },
}, {
    timestamps: true
});

const ClassStudents = mongoose.model('ClassStudents', classStudentsSchema);

module.exports = ClassStudents;