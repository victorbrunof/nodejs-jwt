require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routeUser = require("./src/routes/routerUser")
const cors = require("cors");
const config = require("./src/config/config")

const app = express()

// Config JSON response middleware
app.use(express.json())

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API!' })
})

app.use("/user", cors(config.cors), express.json(), routeUser)

// Credencials
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASS
mongoose.set("strictQuery", true);

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterteste.887xj8f.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectamos ao MongoDB")
    })
    .catch((err) => console.log(err))

app.listen(3333)