const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Coupon } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const coupon = await Coupon.findAll()
        res.json(success("Coupon Retrieve", coupon))
    } catch (e) {
        res.json(error("Coupon Retrieve Error", e))
    }

}

retrieveRouter.get('/coupon-retrieve', TokenVerify(), wrapRequestHandler(handler))
