const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Banner } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const banner = await Banner.findAll({
            attributes: ["image" , "id"],
        })
        res.json(success("Banner Retrieve", banner))
    } catch (err) {
        res.json(error("Banner Retrieve Error", err))
    }
}
retrieveRouter.get('/banner-retrieve', TokenVerify(), wrapRequestHandler(handler))
