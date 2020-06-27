const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const departmentsSchema = new Schema({
    name: { type: Number, trim: true, required: true },
    schoolId: { type: Number, trim: true, required: true },

}, {
    timestamps: true
});

const Departments = mongoose.model('Departments', departmentsSchema);

module.exports = Departments;