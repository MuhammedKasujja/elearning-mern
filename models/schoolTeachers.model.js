const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schoolTeachersSchema = new Schema({
    schoolID: { type: String, required: true },
    teacherID: { type: String, required: true },
    IsActive: { type: Boolean, default: true },

}, {
    timestamps: true
});

const SchoolTeachers = mongoose.model('SchoolTeachers', schoolTeachersSchema);

module.exports = SchoolTeachers;