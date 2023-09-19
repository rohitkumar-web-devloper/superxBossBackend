const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Orders } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const order = await Orders.findAndCountAll()
        console.log(order)
        res.json(success("Orders Retrieve", order))
    } catch (err) {
        res.json(error("Orders Retrieve Error", err))
    }
}
retrieveRouter.get('/orders-retrieve', TokenVerify
(), wrapRequestHandler(handler))
