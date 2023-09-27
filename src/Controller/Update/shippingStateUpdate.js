const { updateRouter } = require('../../Routes/updateRoutes')
const { ShippingDetails } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { Update_Shipping } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { id, state, charge } = req.body
        const result = await ShippingDetails.update({ state, shippingPrice: charge }, {
            where: {
                id
            }
        })
        res.json(success("Shipping State Update"))
    } catch (e) {
        res.json(error("Shipping State Update Error", e))
    }
}
updateRouter.put('/shipping-state-update', TokenVerify(), Update_Shipping, wrapRequestHandler(handler))
