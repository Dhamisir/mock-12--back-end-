require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const connect = require("./config/db");
const cors = require("cors")

app.use(express.json())
app.use(cors())

// auth route
const authRoute = require("./routes/auth.route");
app.use("/auth", authRoute)

// user route
const calculateRoute = require("./routes/calculate.routes");
app.use("/calculate", calculateRoute)


app.get("/", (req, res) => {
    res.send("Server Work Properly")
})

app.listen(PORT, async () => {
    await connect()
    console.log(`http://localhost:${PORT}`)
})