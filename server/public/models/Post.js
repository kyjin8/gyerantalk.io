const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
    hit: {
        type: Number,
        default: 0,
    }
})

const Post = mongoose.model('post', postSchema);
module.exports = { Post };