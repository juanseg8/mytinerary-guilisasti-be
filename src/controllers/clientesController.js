
const express = require("express")
const Client = require("../models/Client")

const getClients = async (req, res) => {

    try {

        let Clients = await Client.find().populate("accounts")

        res.status(200).json({
            Clients
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }


}

const getClient = (req, res) => {

    const { id } = req.params
    const { data } = req.query

    if (data) {
        res.json(

            {
                name: "john",
                lasname: "johnson",
                age: "18",
                paramId: id,
                queryData: data

            })
    } else {
        res.json(

            {
                name: "john",
                lasname: "johnson",
                age: "18",
                paramId: id
            }

        )
    }


}

const addClient = async (req, res) => {

    try {
        let payload = req.body

        // let querys = req.query

        // console.log(querys);

        // console.log(payload);

        let clienteCreado = await Client.create(payload)

        res.status(201).json({
            "message": "Client has been added",
            "Client": clienteCreado
        })

    } catch (err) {
        res.status(500).json({
            message: err
        })

    }

}

const deleteClient = async (req, res) => {

    try {
        let { id } = req.query

        // let querys = req.query

        // console.log(querys);

        // console.log(payload);

        await Client.deleteOne({ _id: id })

        res.status(201).json({
            "message": "Client has been deleted",

        })

    } catch (err) {
        res.status(500).json({
            message: err
        })

    }
}

const updateNameClient = async (req, res) => {

    try {
        let { id } = req.query

        // let querys = req.query

        // console.log(querys);

        // console.log(payload);

        await Client.findByIdAndUpdate(id,{name: "Aitor" })

        res.status(201).json({
            "message": "Name client has been changed",

        })

    } catch (err) {
        res.status(500).json({
            message: err
        })

    }
}


module.exports = {
    getClients,
    getClient,
    addClient,
    deleteClient,
    updateNameClient
} 