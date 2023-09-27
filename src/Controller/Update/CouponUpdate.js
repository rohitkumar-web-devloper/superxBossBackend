const { updateRouter } = require('../../Routes/updateRoutes')
const { Coupon } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Coupon } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const data = await Coupon.update(req.body, {
            where: {
                id: req.body.id,

            }
        })
        res.json(success(("Coupon update")))
    } catch (e) {
        res.json(error(("Coupon update")))

    }
}
updateRouter.put('/coupon-update', TokenVerify(), Update_Coupon, wrapRequestHandler(handler))
