const express = require("express");
const { authRegisterController, authLoginController, authGetProfileController } = require("../controller/auth.controller");
const router = express.Router()

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(name, email, password)
    let data = await authRegisterController(name, email, password);
    res.status(data.status).send(data.payload)
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    // console.log(name, email, password)
    let data = await authLoginController(email, password);
    res.status(data.status).send(data.payload)
})

router.get("/getProfile/:id", async (req, res) => {
    const { id } = req.params;
    // console.log(name, email, password)
    let data = await authGetProfileController(id);
    res.status(data.status).send(data.payload)
})

module.exports = router;
