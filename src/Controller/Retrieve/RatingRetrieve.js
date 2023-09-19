const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Rating } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const recharge = await Rating.findAll()
        res.json(success("Rating Retrieve", recharge))
    } catch (err) {
        res.json(error("Rating Retrieve Error", err))
    }
}
retrieveRouter.get('/rating-retrieve', TokenVerify(), wrapRequestHandler(handler))
