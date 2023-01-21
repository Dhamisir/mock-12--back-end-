const express = require("express");
const { authCalculateController } = require("../controller/calculate.controller");
const router = express.Router()

router.post("/", (req, res) => {
    const { instalment, interest, years } = req.body;
    let data = authCalculateController(instalment, interest, years);
    res.status(data.status).send(data.payload)
})

module.exports = router;
