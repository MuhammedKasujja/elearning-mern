const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const teachersSchema = new Schema({
    userID: { type: String, required: true, },
    schoolID: { type: String, required: true, },
    active: { type: Boolean, default: true },
}, {
    timestamps: true
});

const Teachers = mongoose.model('Teachers', teachersSchema);

module.exports = Teachers;