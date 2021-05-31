const mongoose = require('mongoose');
const repo1Schema = mongoose.Schema({
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

module.exports = mongoose.model('Repo',repo1Schema);