const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const product = await Products.findAll({
            attributes: ['id', 'name']
        })
        res.json(success("Product Retrieve", product))
    } catch (err) {
        res.json(error("Product Retrieve Error", err))
    }
}
retrieveRouter.get('/product-banner', TokenVerify(), wrapRequestHandler(handler))
