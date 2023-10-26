const { updateRouter } = require('../../Routes/updateRoutes')
const { Coupon } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Coupon } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { id, status, code, amount, min_cart_amt, description, start_date, end_date } = req.body
        const exist = await Coupon.findOne({
            where: {
                id
            }
        })
        if (typeof status == 'boolean') {
            exist.status = !status
        }
        exist.code = code
        exist.amount = amount
        exist.min_cart_amt = min_cart_amt
        exist.description = description
        exist.start_date = start_date
        exist.end_date = end_date
        await exist.save()
        res.json(success("Coupon update", exist))
    } catch (e) {
        res.json(error(("Coupon update")))

    }
}
updateRouter.put('/coupon-update', TokenVerify(), Update_Coupon, wrapRequestHandler(handler))
