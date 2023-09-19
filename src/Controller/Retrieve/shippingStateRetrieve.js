const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { ShippingDetails } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const State = await ShippingDetails.findAndCountAll();
        res.json(success("States Retrieve", State))
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e))
    }
}
retrieveRouter.get('/shipping-state-retrieve', TokenVerify(), wrapRequestHandler(handler))
