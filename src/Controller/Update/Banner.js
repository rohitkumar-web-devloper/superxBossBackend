const { updateRouter } = require('../../Routes/updateRoutes')
const { Banner } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Rating } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { id, ids } = req.body
        const exist = await Banner.findOne({
            where: {
                id: +id
            }
        })
        exist.product_id = ids || exist.product_id
        await exist.save();
        res.json(success("Rating Status Update", exist))
    } catch (e) {
        res.json(error("Rating Status Update Error", e))
    }
}
updateRouter.put('/banner-update', TokenVerify(), Update_Rating, wrapRequestHandler(handler))
