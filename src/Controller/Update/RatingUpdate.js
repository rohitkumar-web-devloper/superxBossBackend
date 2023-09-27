const { updateRouter } = require('../../Routes/updateRoutes')
const { Rating } = require("../../models")

const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Rating } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const result = await Rating.update(req.body, {
            where: {
                id: req.body.id,
            }
        })
        res.json(success("Rating Status Update"))
    } catch (e) {
        res.json(error("Rating Status Update Error", e))
    }
}
updateRouter.put('/rating-update', TokenVerify(), Update_Rating, wrapRequestHandler(handler))
