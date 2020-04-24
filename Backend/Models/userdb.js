const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    emp_id: {
        type: String,
        required: true,
    },
    date_of_joining: {
        type: Date,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);