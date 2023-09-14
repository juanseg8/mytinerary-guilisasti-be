const { Schema, model, Types } = require("mongoose")

const schemaClient = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    accounts:[{
        type: Types.ObjectId,
        ref: "Account"
    }]
})

const Client = model("Client", schemaClient)

module.exports = Client