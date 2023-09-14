const { verifyPassword } = require("../middlewares/auth")
const User = require("../models/User")

const register = async (req, res) => {

    try {
        const payload = req.body
        const userExists = await User.findOne({ email: payload.email })

        if (userExists) {
            return res.status(403).json({ message: "User already exists" },)
        }

        const user = await User.create(payload)

        res.status(200).json({
            success: true,
            message: "User created sucessfully",
            token: req.token,
            user
        })

    } catch (e) {
        res.status(400).json({ success: false, message: e.message })
    }
}

const login = async (req, res) => {

    try {
        res.status(200).json({
            success: true,
            message: "Successfully logged",
            token: req.token,
            user: {
                // no pongo user: req.user porque me da informacion que no queiro (contraseña)
                name: req.user.name,
                urlphoto: req.user.urlphoto,
                email: req.user.email,
                id: req.user._id,
            }
        })

    } catch (e) {
        res.status(400).json({ success: false, message: e.message })
    }


}

const authenticated = async (req, res) => {
    try {
        res.status(200).json({
            message: "Successfully authenticated",
            token: req.token,
            user: {
                // no pongo user: req.user porque me da informacion que no queiro (contraseña)
                name: req.user.name,
                email: req.user.email,
                id: req.user._id,
            }
        })

    } catch (e) {
        res.status(400).json({ message: e.message })
    }


}

const logout = async (req, res) => {
    try {
        res.status(200).json({ message: "loged out", token: req.token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    register,
    login,
    authenticated,
    logout
} 