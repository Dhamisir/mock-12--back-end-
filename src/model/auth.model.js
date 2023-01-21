const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
       unique: true
    },
    password: String
})

const authModel = mongoose.model("auth", authSchema);
module.exports = authModel;
