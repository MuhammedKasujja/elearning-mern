const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const departmentClassesSchema = new Schema({
    classID: { type: String, trim: true, required: true },
    schoolYear: { type: Number, trim: true, required: true },

}, {
    timestamps: true
});

const DepartmentClasses = mongoose.model('DepartmentClasses', departmentClassesSchema);

module.exports = DepartmentClasses;