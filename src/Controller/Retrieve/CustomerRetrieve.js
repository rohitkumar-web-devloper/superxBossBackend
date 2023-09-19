const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Customers } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const startIndex = (page - 1) * limit
        const endIndex = +limit
        const customers = await Customers.findAndCountAll({
            attributes: ["id", "first_name", "last_name", "mobile", "state",  "type", "profile_picture", "business_type", "business_name" ,"business_contact_no" ,"gst_no" , "status"],
            offset: startIndex,
            limit: endIndex,
        })
        res.json(success("Customer Retrieve", customers))
    } catch (e) {
        res.json(error("Customer Retrieve Error", e))
    }

}

retrieveRouter.get('/customer-retrieve', TokenVerify(), wrapRequestHandler(handler))
