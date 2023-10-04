const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Segment_type } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const result = await Segment_type.findAll({
            attributes: ["product_id"],
            where: {
                segment_type: req.query.name
            },
            raw: true
        })
        return res.json(success("like product retrieve", result))
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e))
    }
}
retrieveRouter.get('/segment-product', AppTokenVarify(), wrapRequestHandler(handler))
