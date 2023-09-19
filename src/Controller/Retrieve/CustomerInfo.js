const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Customers } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const customers = await Customers.findOne({
            // attributes: [ "first_name", "last_name", "mobile", "state", "type", "profile_picture", "business_type", "business_name", "business_contact_no", "gst_no"],
            attributes: ["first_name", "last_name", "mobile", "profile_picture", "email", "type"],
            where: {
                id: req.login_token.id
            }
        })
        res.json(success("Customer Retrieve", customers))
    } catch (e) {
        res.json(error("Customer Retrieve Error", e))
    }

}

retrieveRouter.get('/customer-info', AppTokenVarify(), wrapRequestHandler(handler))
