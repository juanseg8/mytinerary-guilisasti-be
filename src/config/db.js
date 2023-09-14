const mongoose = require("mongoose")
require ("dotenv/config.js")

const URI = (process.env.MONGO_URL)

mongoose.connect(URI)
    .then(() => {
        console.log("Conect success to database")
    })
    .catch(() => {
        console.log("Error connecting to database")
    })


