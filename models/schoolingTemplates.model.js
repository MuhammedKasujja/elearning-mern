const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schoolingTemplatesSchema = new Schema({
    schoolID: { type: String, required: true },
    templateName: { type: String, required: true },
    description: { type: String, },

}, {
    timestamps: true
});

const SchoolingTemplates = mongoose.model('SchoolingTemplates', schoolingTemplatesSchema);

module.exports = SchoolingTemplates;