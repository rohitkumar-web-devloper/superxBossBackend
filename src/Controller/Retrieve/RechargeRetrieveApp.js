const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Recharges } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const recharge = await Recharges.findAll({
            where: {
                status: true
            }
        })
        res.json(success("Recharge Retrieve", recharge))
    } catch (err) {
        res.json(error("Recharge Retrieve Error", err))
    }
}
retrieveRouter.get('/recharge-retrieve-app', AppTokenVarify(), wrapRequestHandler(handler))
