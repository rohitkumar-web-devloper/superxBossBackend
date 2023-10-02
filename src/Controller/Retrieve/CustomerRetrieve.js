const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Customers } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const { page, limit } = req?.query
        let customers;
        if (page, limit) {
            const startIndex = (page - 1) * limit
            const endIndex = +limit
            customers = await Customers.findAndCountAll({
                attributes: ["id", "first_name", "last_name", "mobile", "state", "type", "profile_picture", "business_type", "business_name", "business_contact_no", "gst_no", "status"],
                offset: startIndex,
                limit: endIndex,
            })
        }
        else {
            customers = await Customers.findAll({
                attributes: ["id", "first_name", "fcm_token"],
            })
        }
        res.json(success("Customer Retrieve", customers))
    } catch (e) {
        res.json(error("Customer Retrieve Error", e))
    }

}

retrieveRouter.get('/customer-retrieve', TokenVerify(), wrapRequestHandler(handler))
