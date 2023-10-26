const { updateRouter } = require('../../Routes/updateRoutes')
const { Recharges } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Recharge } = require("../../Middleware/PermissionCheck")
const handler = async (req, res) => {
    try {
        const { amount, offer_amount, id, status } = req?.body
        const exist = await Recharges.findOne({
            where: {
                id
            }
        })
        if (typeof status == "boolean") {
            exist.status = !status
        } else {
            exist.amount = +amount
            exist.offer_amount = +offer_amount
        }
        exist.save()
        return res.json(success("Recharge update", exist))
    } catch (e) {
        // console.log(' Error Occur when Brand Status Update', e.message)
        res.json(error("Recharge is not update", e))
    }
}
updateRouter.put('/recharge-update', TokenVerify(), Update_Recharge, wrapRequestHandler(handler))
