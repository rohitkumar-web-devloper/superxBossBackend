const { updateRouter } = require('../../Routes/updateRoutes')
const { Recharges } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const { amount, offer_amount, id, status } = req?.body
        if (typeof status == "boolean") {
            const recharge = await Recharges.update({ status: !status }, {
                where: {
                    id: id
                }
            })
        } else {
            const recharge = await Recharges.update({ amount: +amount, offer_amount: +offer_amount }, {
                where: {
                    id: id
                }
            })
        }


        return res.json(success("Recharge update"))
    } catch (e) {
        // console.log(' Error Occur when Brand Status Update', e.message)
        res.json(error("Recharge is not update", e))
    }
}
updateRouter.put('/recharge-update', TokenVerify(), wrapRequestHandler(handler))
