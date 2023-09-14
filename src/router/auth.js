const express = require("express")
const { register, login, authenticated, logout } = require("../controllers/AuthController")
const { verifyUserData, verifyUserDataLogin } = require("../middlewares/verifications")
const { hashPassword, verifyUserExists, verifyPassword, generateToken, passportVerificate } = require("../middlewares/auth")

const authRouter = express.Router()

authRouter.post("/register", verifyUserData, hashPassword, generateToken, register)
authRouter.post("/login", verifyUserDataLogin, verifyUserExists, verifyPassword, generateToken, login)
authRouter.post("/authenticated", passportVerificate.authenticate("jwt", { session: false }), generateToken, authenticated)
authRouter.post("/logout", passportVerificate.authenticate("jwt", { session: false }), logout)



module.exports = authRouter