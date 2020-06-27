const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schoolStudentsSchema = new Schema({
    schoolID: { type: String, required: true },
    studentID: { type: String, required: true },
    IsActive: { type: Boolean, default: true },

}, {
    timestamps: true
});

const SchoolStudents = mongoose.model('SchoolStudents', schoolStudentsSchema);

module.exports = SchoolStudents;