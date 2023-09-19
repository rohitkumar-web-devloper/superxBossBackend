const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {VehicleParts} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const {product_id} = req.query
        const vehiclePart = await VehicleParts.findAll({
            attributes: ['vehicle_brand_id'],
            where: {
                product_id: +product_id
            }
        })
        res.json(success("", vehiclePart))
    } catch (err) {
        res.json(error("Brand Retrieve Error", err))
    }
}
retrieveRouter.get('/selected-product-brands', TokenVerify(), wrapRequestHandler(handler))
