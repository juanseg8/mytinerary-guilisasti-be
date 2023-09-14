const Joi = require("joi")

const userSchemaData = Joi.object({

    name: Joi.string().min(4).required().messages({
        "any.required": "Please enter name",
        "string.empy": "Please enter name",
        "string.min": "Name must be at least 4 characters",
    }),
    lastname: Joi.string().min(4).required().messages({
        "any.required": "Please enter lastname",
        "string.empy": "Please enter lastname",
        "string.min": "Lastname must be at least 4 characters",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Please enter email",
        "string.empy": "Please enter your email",
        "string.email": "Please enter your email",
    }),
    password: Joi.string().alphanum().min(6).required().messages({
        "any.required": "Please enter password",
        "string.empy": "Please enter password",
        "string.alphanum": "Please enter numbers and letters",
        "string.min": "Password must be at least 6 characters"
    }),
})

const userSchemaDataLogin = Joi.object({

    email: Joi.string().email().required().messages({
        "any.required": "Please enter email",
        "string.empy": "Please enter your email",
        "string.email": "Please enter your email",
    }),
    password: Joi.string().alphanum().min(6).required().messages({
        "any.required": "Please enter password",
        "string.empy": "Please enter password",
        "string.alphanum": "Please enter numbers and letters",
        "string.min": "Password must be at least 6 characters"
    }),
})

const verifyUserData = (req, res, next) => {

    const { name, lastname, email, password } = req.body

    const userValidate = userSchemaData.validate({ name, lastname, email, password }, { abortEarly: false })

    if (userValidate.error) {
        return res.status(400).json({ message: userValidate.error.details.map((err) => err.message) })
    }

    next()
}

const verifyUserDataLogin = (req, res, next) => {

    const { email, password } = req.body

    const userValidate = userSchemaDataLogin.validate({ email, password }, { abortEarly: false })

    if (userValidate.error) {
        return res.status(400).json({ message: userValidate.error.details.map((err) => err.message) })
    }

    next()
}




module.exports = {
    verifyUserData,
    verifyUserDataLogin,
}