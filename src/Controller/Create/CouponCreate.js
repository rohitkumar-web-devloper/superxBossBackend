const { createRouter } = require('../../Routes/createRoutes')
const { Coupon } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {body} = require('express-validator');
const {validate} = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const {Create_Coupon}= require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { code, amount, min_cart_amt, description, start_date, end_date } = req.body
        const data = { code, amount: +amount, min_cart_amt: +min_cart_amt, description, start_date, end_date , status : true }
        const result = await Coupon.create(data)
        return res.json(success("User Created", result))
    } catch (e) {
        return res.json(error("Enter Valid Details"))
    }
}
createRouter.post("/coupon-create", TokenVerify(), Create_Coupon, validate([
    body("start_date").notEmpty().withMessage("Start Date is requried"),
    body("end_date").notEmpty().withMessage("End Date is requried"),
    body("code").notEmpty().withMessage("Code is requried"),
    body("amount").notEmpty().withMessage("Amount is requried"),
    body("min_cart_amt").notEmpty().withMessage("Minimum Cart Amount is requried"),
]), wrapRequestHandler(handler));