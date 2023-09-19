const { createRouter } = require('../../Routes/createRoutes')
const { ShippingDetails } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {

    try {
        const { state , charge} = req.body;
        console.log(req.body)
        const State = await ShippingDetails.create({
           state , 
           shippingPrice : charge
        })
        return res.json(success("State Created"))
    } catch (e) {
        return res.json(error("Enter Valid Details", e))
    }
}
createRouter.post("/shipping-state-create", TokenVerify(), validate([
    body("state").notEmpty().withMessage("State field is required"),
    body("charge").notEmpty().withMessage("Charge field is required")
]), wrapRequestHandler(handler));