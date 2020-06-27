const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const templateSetsMembersSchema = new Schema({
    templatesSetsID: { type: String, required: true,},

}, {
    timestamps: true
});

const TemplateSetsMembers = mongoose.model('TemplateSetsMembers', templateSetsMembersSchema);

module.exports = TemplateSetsMembers;