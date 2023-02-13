const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        review: { type: String, required: true },
        rating: { type: String, required: true },
        name: { type: String, required: true },
        pcId: { type: Schema.Types.ObjectId, ref: 'pc', required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Post', Post)