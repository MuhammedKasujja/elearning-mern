const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    login: { type: String,  default: null},
    email: { type: String, unique: true, trim: true, required: true },
    telephone: { type: Number, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    pin: { type: String,  },
    firstName: { type: String, trim: true, required: true },
    middleName: { type: String, default: null},
    lastName: { type: String, trim: true, required: true },
    country: { type: String, default:null },
    street: { type: String, default: null },
    city: { type: String, trim: true, required: true },
    postCode: { type: String,  default: null},
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, default: Date.now },
    locked: { type: Boolean, default: true },
    verificationCode: { type: String, default: null},
    verificationValidity: { type: Date ,default: null },
    dualAuthentication: { type: Boolean, default: false },
    note: { type: String, default: null },

}, {
    timestamps: true
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;