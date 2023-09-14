const express = require("express")
const Itinerary = require("../models/Itinerary")



const getItineraries = async (req, res) => {
    try {
        const itinerary = await Itinerary.find()
        res.json({ itinerary: itinerary })

    } catch (error) {
        res.status(500).json({ error: error })

    }

}

const getItinerary = async (req, res) => {
    try {

        const itinerary = await Itinerary.findById(req.query)

        res.json(itinerary)

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const addItinerary = async (req, res) => {

    try {
        const newItinerary = await Itinerary.create(req.body)
        res.json({ newItineraryy: newItinerary })
    } catch (error) {
        res.status(500).json({ message: error })

    }
}

const deletaItinerary = async (req, res) => {
    try {
        let { id } = req.query

        await Itinerary.deleteOne({ _id: id })

        res.status(201).json({
            "message": "Itinerary has been delated"
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

const updateCitieItinerary = async (req, res) => {
    try {
        let { id } = req.query
        await Itinerary.findByIdAndUpdate(id, { citie: "San Sebastián" })
        await Itinerary.findByIdAndUpdate(id, { name: "San Sebastián 2" })
        res.status(201).json({
            "message": "Itineray has been changed"
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

module.exports = {
    addItinerary,
    getItineraries,
    getItinerary,
    deletaItinerary,
    updateCitieItinerary
}