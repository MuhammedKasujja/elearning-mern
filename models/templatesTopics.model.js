const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const templatesTopicsSchema = new Schema({
    topicID: { type: String, required: true },
    templateID: { type: String, required: true },
}, {
    timestamps: true
});

const TemplatesTopics = mongoose.model('TemplatesTopics', templatesTopicsSchema);

module.exports = TemplatesTopics;