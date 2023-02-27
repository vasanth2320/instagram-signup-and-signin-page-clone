const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    emailAddress: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        type: mongoose.Schema.Types.Mixed,
        unique: true
    },
    password: {
        type: String,
        type: mongoose.Schema.Types.Mixed,
        requied: true
    }},
    {
        collation: 'users'
    }
);

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model;