const mongoose = require('mongoose');

const DpSchema = mongoose.Schema({
    img: 
      { data: Buffer, contentType: String }
})

module.exports = mongoose.model('profile',DpSchema);