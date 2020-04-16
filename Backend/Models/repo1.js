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
    }

    

});

module.exports = mongoose.model('Repo',repo1Schema);