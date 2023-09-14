const express = require("express")
const router = require("./router/router")
const cors = require ("cors")
require("./config/db")



const app = express()

app.use(cors())

app.use(express.json())

app.listen(2000, () => {
    console.log("listening  in port 2000");
})

app.use("/api", router)