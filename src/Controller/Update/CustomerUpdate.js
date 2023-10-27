const { updateRouter } = require('../../Routes/updateRoutes')
const { Customers } = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { body } = require('express-validator');
const handler = async (req, res) => {
    try {
        console.log(req.body)
        const { first_name, last_name, email, refer_code, refrence_code, business_type, type, business_name, gst_number, business_contact_no, state, language, mobile } = req.body
        const exist = await Customers.findOne({
            where: {
                id: req.login_token.id
            }
        })
        exist.first_name = first_name || exist.first_name
        exist.last_name = last_name || exist.last_name
        exist.email = email || exist.email
        exist.refer_code = refer_code || exist.refer_code
        exist.refrence_code = refrence_code || exist.refrence_code
        exist.business_type = business_type || exist.business_type
        exist.type = type || exist.type
        exist.business_name = business_name || exist.business_name
        exist.gst_number = gst_number || exist.gst_number
        exist.business_contact_no = business_contact_no || exist.business_contact_no
        exist.state = state || exist.state
        exist.language = language || exist.language
        exist.mobile = mobile || exist.mobile
        await exist.save()
        res.json(success("User Fill Information", exist))
    } catch (err) {
        res.json(error("User Fill Information Error"))
    }
}
updateRouter.put('/customer-update', AppTokenVerify(), validate([
    body("first_name").notEmpty().withMessage("FirstName is required"),
    body("last_name").notEmpty().withMessage("LastName is required"),
    body("state").notEmpty().withMessage("State is required"),
    body("language").notEmpty().withMessage("Language is required"),
    body("type").notEmpty().withMessage("Type is requires"),
    // body("business_type").notEmpty().withMessage("Business_type is required"),
    // body("business_name").notEmpty().withMessage("BusinessName is required"),
    // body("gst_number").notEmpty().withMessage("Gst Number is required"),
    // body("business_contact_no").notEmpty().withMessage("Business_Contact_No is required"),

]), wrapRequestHandler(handler))
