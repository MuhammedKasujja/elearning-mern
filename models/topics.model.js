const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const topicsSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
}, {
    timestamps: true
});

const Topics = mongoose.model('Topics', topicsSchema);

module.exports = Topics;