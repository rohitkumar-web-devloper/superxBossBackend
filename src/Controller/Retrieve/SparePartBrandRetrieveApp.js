const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Brand } = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const limit = req.query?.limit
        let result;
        if (req.query.limit) {
            result = +limit.charAt(0)
        }
        let brand
        if (result) {
            brand = await Brand.findAll({
                attributes: ['id', "logo", ["name", "label"]],
                where: {
                    type: "vehicle + Spare Part"
                },
                limit: result
            })
        } else {
            brand = await Brand.findAll({
                attributes: [['id', "value"], "logo", ["name", "label"]],
                where: {
                    type: ["Spare Parts", "vehicle + Spare Part"]
                },

            })
        }

        res.json(success("Spare Parts Brands Retrieve ", brand))

    } catch (e) {
        res.status(400).json(error("Spare Parts Brands Retrieve Error", e))
    }
}
retrieveRouter.get('/spare-part-brand-app', AppTokenVerify(), wrapRequestHandler(handler))
