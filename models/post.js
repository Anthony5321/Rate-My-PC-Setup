const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        Review: { type: String, required: true },
        Rating: { type: String, required: true },
        Name: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Post', Post)