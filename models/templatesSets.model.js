const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const templatesSetsSchema = new Schema({
    schoolID: { type: String, required: true },
    name: { type: String, required: true,  trim: true },
}, {
    timestamps: true
});

const TemplatesSets = mongoose.model('TemplatesSets', templatesSetsSchema);

module.exports = TemplatesSets;