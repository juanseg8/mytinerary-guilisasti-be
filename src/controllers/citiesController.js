const express = require("express")
const Citie = require("../models/Citie")
const Itinerary = require("../models/Itinerary")

const getCities = async (req, res) => {

    const queryParams = {}

    if(req.query.name){
        queryParams.name = { $regex: req.query.name, $options:'i'}
    }

    try {
        let Cities = await Citie.find(queryParams).populate("itinerary")

        res.status(200).json({
            Cities
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getCitie = async (req, res) => {
    try {
        
        const citie = await Citie.findById(req.query).populate("itinerary")

        res.json( citie )

    } catch (error) {
        res.status(500).json({ message: error })
    }
}


const addCitie = async (req, res) => {
    try {
        let payload = req.body

        let citieCreate = await Citie.create(payload)

        res.status(201).json({
            "message": "Citie has been added",
            "Citie": citieCreate
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

const deleteCitie = async (req, res) => {
    try {
        let { id } = req.query

        await Citie.deleteOne({ _id: id })

        res.status(201).json({
            "message": "Citie has been delated"
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

const updateNameCitie = async (req, res) => {
    try {
        let { id } = req.query
        await Citie.findByIdAndUpdate(id, { name: "nombre nuevo" })
        res.status(201).json({
            "message": "Name Citie has been changed"
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

const updateItineraryCitie = async (req, res) => {
    try {
        let { id } = req.query

        const {name: nameCitie} = req.query

        const aux = await Itinerary.find({citie:nameCitie})

        await Citie.findByIdAndUpdate(id, { itinerary: aux })

        res.status(201).json({
            "message": "Itinerary Citie has been changed"
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}


module.exports = {
    getCities,
    getCitie,
    addCitie,
    deleteCitie,
    updateNameCitie,
    updateItineraryCitie
}