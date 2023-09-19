const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Brand} = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

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
                attributes: ['id', "name", "logo"],
                where: {
                    type: "Vehicle"
                },
                limit: result
            })
        } else {
            brand = await Brand.findAll({
                attributes: ['id', "name", "logo"],
                where: {
                    type: "Vehicle"
                },

            })
        }
        res.json(success("Vehicle Brands Retrieve ", brand))

    } catch (e) {
        res.status(400).json(error("Vehicle Brands Retrieve Error", e))
    }
}
retrieveRouter.get('/vehicle-brand-app', AppTokenVerify(), wrapRequestHandler(handler))
