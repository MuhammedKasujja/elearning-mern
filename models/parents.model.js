const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const parentsSchema = new Schema({
    userID: { type: String, required: true, },
    studentID: { type: String, required: true, },

}, {
    timestamps: true
});

const Parents = mongoose.model('Parents', parentsSchema);

module.exports = Parents;