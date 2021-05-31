const mongoose = require('mongoose');

var repo1Schema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    certificate:{
        type: String
    },
    certificate_mimetype:{
        type: String
    }
});

var userSchema = mongoose.Schema({
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
    },
    events: [ repo1Schema ]

});

module.exports = mongoose.model('user', userSchema);