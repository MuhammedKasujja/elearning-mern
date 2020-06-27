const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schoolTopicsSchema = new Schema({
    topicID: { type: String, required: true },
    teacherID: { type: String, required: true },

}, {
    timestamps: true
});

const SchoolTopics = mongoose.model('SchoolTopics', schoolTopicsSchema);

module.exports = SchoolTopics;