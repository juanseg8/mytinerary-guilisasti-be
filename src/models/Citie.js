const { Schema, model, default: mongoose } = require("mongoose")

const schemaCitie = new Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    itinerary: [{
        type: mongoose.Types.ObjectId, 
        ref: "Itinerary"
    }]

})

const Citie = model("Citie", schemaCitie)

module.exports = Citie