const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    songId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required:true
    }
})


const songModel = mongoose.model('song', songSchema);
module.exports = { songModel }