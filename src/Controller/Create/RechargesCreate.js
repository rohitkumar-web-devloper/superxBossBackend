const { createRouter } = require('../../Routes/createRoutes')
const { Recharges } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { Create_Recharge} = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    const { amount, offer_amount } = req.body
    try {
        const recharge = await Recharges.create({ amount: +amount, offer_amount: +offer_amount, status: true })
        return res.json(success("Recharges Created"))
    } catch (e) {
        return res.json(error("Enter Valid Details", e))
    }


}
createRouter.post("/recharge-create", TokenVerify(), Create_Recharge , validate([
    body("amount").notEmpty().withMessage("Amount is requried"),
    body("offer_amount").notEmpty().withMessage("Offer Amount is requried"),
]), wrapRequestHandler(handler));