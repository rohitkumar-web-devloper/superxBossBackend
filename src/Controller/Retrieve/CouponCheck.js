const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Coupon } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const { code, GrandTotal } = req?.query

        const coupon = await Coupon.findOne({
            where: {
                code: code,
                status: true
            }
        })
        if (coupon.min_cart_amt <= GrandTotal) {
            res.json(success("Coupon Retrieve", { lessAmount: coupon.amount }))
        } else {
            res.json(error("Cart Amount is less coupon in not apply"))
        }
    } catch (e) {
        res.json(error("Coupon Retrieve Error", e))
    }

}

retrieveRouter.get('/coupon-check', AppTokenVarify(), wrapRequestHandler(handler))
