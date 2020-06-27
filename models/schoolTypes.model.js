const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schoolTypesSchema = new Schema({
    type: { type: String, required: true, trim: true },

}, {
    timestamps: true
});

const SchoolTypes = mongoose.model('SchoolTypes', schoolTypesSchema);

module.exports = SchoolTypes;