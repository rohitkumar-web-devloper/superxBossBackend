const {createRouter} = require('../../Routes/createRoutes')
const {UserAddress} = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const {body} = require('express-validator');
const {validate} = require("../../helper/validation")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const userAddress = await UserAddress.create({...req.body, user_id: req.login_token.id})

        return res.json(success("Address Created", userAddress))
    } catch (e) {
        return res.json(error("Enter Valid Details"))
    }


}
createRouter.post("/user-add-address", AppTokenVerify(), wrapRequestHandler(handler));