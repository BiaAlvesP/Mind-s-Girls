// IMPORT

const express = require("express");
const cors = require("cors");

const user = require("./src/routes/user")

// CONFIG
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: false }));

// ROUTES

app.use(user)

const port = 3333
app.listen(port, () => console.log("servidor rodando na porta: " + port))