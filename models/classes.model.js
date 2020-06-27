const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classesSchema = new Schema({
    schoolID: { type: String, trim: true, required: true },
    active: { type: Boolean, trim: true, required: true },
    createdBy: { type: String, required: true },
    startDate: { type: Date, required: true },
    capacity: { type: Number },
    className: { type: String, trim: true, required: true },
    note: { type: String, trim: true },

}, {
    timestamps: true
});

const Classes = mongoose.model('Classes', classesSchema);

module.exports = Classes;