const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Brand , User} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    const startIndex = (page - 1) * limit
    const endIndex = +limit
    try {
        const brand = await Brand.findAndCountAll({
            offset: startIndex,
            limit: endIndex,
            include: [
                {
                    attributes: ["name"],
                    model: User,
                    as: "user"
                }
            ]
        })
        res.json(success("Brand Retrieve" , brand))
    } catch (err) {
        res.json(error("Brand Retrieve Error" , err))
    }
}
retrieveRouter.get('/main-brands-retrieve', TokenVerify(), wrapRequestHandler(handler))
