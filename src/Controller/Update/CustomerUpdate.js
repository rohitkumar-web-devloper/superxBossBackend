const {updateRouter} = require('../../Routes/updateRoutes')
const {Customers} = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")
const {validate} = require("../../helper/validation")
const {body} = require('express-validator');
const handler = async (req, res) => {
    try {
        let data = await Customers.update(req.body, {
            where: {
                mobile: req.body.mobile
            }
        })
        res.json(success("User Fill Information"))
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
