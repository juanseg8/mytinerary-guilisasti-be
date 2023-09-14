const { Schema, model, default: mongoose, } = require("mongoose")

const schemaItinerary = new Schema({
    name:{
        type: "String"
    },
    guide: [{
        name: String,
        photon: String
    }],
    price: {
        type: Number,

    },
    duration: {
        type: Number,

    },
    likes: {
        type: Number,

    },
    tags: {
        type: String,

    },
    citie: {
        type: String,
    }
})

const Itinerary = model("Itinerary", schemaItinerary)

module.exports = Itinerary