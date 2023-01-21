const authModel = require("../model/auth.model");

// authRegisterController
async function authRegisterController(name, email, password) {
    try {
        let user = await authModel.create({ name, email, password });
        return {
            status: 201,
            payload: { msg: "User Created Successfull" }
        }
    } catch (error) {
        return {
            status: 401,
            payload: { msg: error.message }
        }
    }
}

// authLoginController
async function authLoginController(email, password) {
    try {
        let user = await authModel.findOne({ email, password });
        return {
            status: 201,
            payload: { msg: user.id }
        }
    } catch (error) {
        return {
            status: 401,
            payload: { msg: error.message }
        }
    }
}

// authGetProfileController
async function authGetProfileController(id) {
    try {
        let user = await authModel.findById(id);
        return {
            status: 201,
            payload: { msg: user }
        }
    } catch (error) {
        return {
            status: 401,
            payload: { msg: error.message }
        }
    }
}


module.exports = { authRegisterController, authLoginController, authGetProfileController };