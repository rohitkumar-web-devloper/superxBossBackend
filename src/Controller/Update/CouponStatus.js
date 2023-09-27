const { updateRouter } = require('../../Routes/updateRoutes')
const { Coupon } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const {Update_Coupon}= require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {

    const data = await Coupon.update({ status: !req.body.statusId }, {
        where: {
            id: req.body.couponId,

        }
    })
    res.json(success(("Status update")))
}
updateRouter.put('/coupon-status', TokenVerify(), Update_Coupon , wrapRequestHandler(handler))
