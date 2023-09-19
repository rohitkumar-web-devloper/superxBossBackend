const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { ShippingDetails } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const states = await ShippingDetails.findAll({
            attributes: [['state', "label"]]
        })
        res.json(success("state", states))
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e))
    }
}
retrieveRouter.get('/shipping-state-retrieve-app', AppTokenVarify(), wrapRequestHandler(handler))
