const { createRouter } = require('../../Routes/createRoutes')
const { Customers, Otp } = require("../../models")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler } = require("../../helper/response")

const otpfunc = async (id) => {
    const otpData = "1234"
    const data = await Otp.create({ user_id: id, otp_number: otpData })
}
const handler = async (req, res) => {
    const { mobile } = req.body
    const exist = await Customers.findOne({ where: { mobile: mobile } })
    if (exist) {
        otpfunc(exist.id)
        res.json(success(("User Already Exist", exist)))
    } else {
        const customers = await Customers.create({ ...req.body, profile_picture: "default-image.jpg" , status: true });
        otpfunc(customers.id)
        res.json(success(("User successfully register", customers)))
    }
}

createRouter.post('/sign-in', validate([
    body("mobile").notEmpty().withMessage("Mobile number is required"),
    body("mobile").isMobilePhone('en-IN',).withMessage("Enter Valid mobile number"),
]), wrapRequestHandler(handler))
