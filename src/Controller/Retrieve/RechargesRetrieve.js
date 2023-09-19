const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Recharges } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const recharge = await Recharges.findAll()
        res.json(success("Recharge Retrieve", recharge))
    } catch (err) {
        res.json(error("Recharge Retrieve Error", err))
    }
}
retrieveRouter.get('/recharge-retrieve', TokenVerify(), wrapRequestHandler(handler))
