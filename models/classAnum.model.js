const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classAnumSchema = new Schema({
    yearID: { type: String, required: true },
    classID: { type: String, trim: true, required: true },
    className: { type: String, trim: true, required: true },

}, {
    timestamps: true
});

const ClassAnum = mongoose.model('ClassAnum', classAnumSchema);

module.exports = ClassAnum;