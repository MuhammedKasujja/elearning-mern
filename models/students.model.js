const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const studentsSchema = new Schema({
    userID: { type: String, required: true, },
    schoolID: { type: String, required: true, },
}, {
    timestamps: true
});

const Students = mongoose.model('Students', studentsSchema);

module.exports = Students;