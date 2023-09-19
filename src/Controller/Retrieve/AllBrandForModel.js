const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Brand } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        console.log(req.body)
        const brand = await Brand.findAll({
            attributes: ['id', "name"],
            where: {
                type: ["Spare Parts", "vehicle + Spare Part"]
            }
        })
        res.json(success("Spare Parts Brands Retrieve ", brand))

    } catch (e) {
        res.status(400).json(error("Spare Parts Brands Retrieve Error", e))
    }
}
retrieveRouter.get('/all-brand-for-model', TokenVerify(), wrapRequestHandler(handler))
