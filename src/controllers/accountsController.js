const Account = require("../models/Account")
const Client = require("../models/Client")

const addAccount = async (req, res) => {
    try {
        let { id } = req.query

        let clientFound = await Client.findById(id)

        let newAccount = await Account.create({ number: "VIN001", _client: clientFound })

        await clientFound.updateOne({ accounts: [...clientFound.accounts, newAccount] })

        let clientFoundUpdated = await Client.findById(id).populate("accounts")

        res.status(200).json({
            message: "Client has been updated succesfully",
            client: clientFoundUpdated
        })

    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}

module.exports = {
    addAccount
}