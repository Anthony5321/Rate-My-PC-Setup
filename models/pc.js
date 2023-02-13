const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pc = new Schema(
    {
        backdrop_path: { type: String, required: true },
        id:{ type: String, required: true },
        title:{ type: String, required: true },
        CPU: { type: String, required: true },
        GPU: { type: String, required: true },
        memory: { type: String, required: true },
        storage: { type: String, required: true },
        powerAndCooling: { type: String, required: true },
        price: { type: String, required: true },
        release_date: { type: String, required: true },
    },
    { timestamps: true },
    )

    module.exports = mongoose.model('pc', pc)