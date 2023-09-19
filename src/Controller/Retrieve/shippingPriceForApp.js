const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { ShippingDetails } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const { state } = req.query
        console.log(state)
        const states = await ShippingDetails.findOne({
            attributes: ["shippingPrice"],
            where: {
                state,
            }
        })
        res.json(success("state", states))
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e))
    }
}
retrieveRouter.get('/shipping-price-retrieve-app', AppTokenVarify(), wrapRequestHandler(handler))
