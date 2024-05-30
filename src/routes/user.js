// IMPORT

const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")

// SIGNUP

router.post("/cadastro", (req, res) => {
    userController.cadastro(req, res)
})

// SIGNiN

router.post("/login", (req, res) => {
    userController.login(req, res)
})

module.exports = router
