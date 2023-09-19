const { deleteRouter } = require('../../Routes/deleteRoutes')
const { Banner } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const banner = await Banner.destroy({
            where: {
                id: req.body.id
            }
        })
        res.json(success("Banner Removed"))
    } catch (err) {
        res.json(error("Banner Removed Error", err))
    }
}
deleteRouter.delete('/banner-remove', TokenVerify(), wrapRequestHandler(handler))