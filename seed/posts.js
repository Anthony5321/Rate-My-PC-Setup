const db = require('../db')
const post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [

    ]

    await post.insertMany(posts)
    console.log("Created some posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()