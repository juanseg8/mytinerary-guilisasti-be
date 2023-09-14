const {Schema, model} = require("mongoose")

const schemaUser = new Schema({
    name: {
        type: String,
        requried: true,
    },
    lastname: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
    },
    password: {
        type: String,
        requried: true,
    },
    datebirth: {
        type: String,
    },
    urlphoto: {
        type: String,
        requried: true,
    },
    country: {
        type: String,
    },
})

const User = model("User", schemaUser)

module.exports = User