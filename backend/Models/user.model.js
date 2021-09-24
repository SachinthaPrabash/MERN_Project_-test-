const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({

    userName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    password: { type: String },
    tel: { type: Number },
    address: { type: String },
    gender: { type: String },
    active: { type: String },
});

const User = mongoose.model('User', userScheme);

module.exports = User;

