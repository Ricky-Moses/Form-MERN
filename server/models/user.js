const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    martial: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);