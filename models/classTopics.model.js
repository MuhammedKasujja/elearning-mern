const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classTopicsSchema = new Schema({
    annumYearID: { type: String, trim: true, required: true },
    templateSetID: { type: String, trim: true, required: true },

}, {
    timestamps: true
});

const ClassTopics = mongoose.model('ClassTopics', classTopicsSchema);

module.exports = ClassTopics;