const {updateRouter} = require('../../Routes/updateRoutes')
const {Brand} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const data = await Brand.update({status: !req.body.statusId}, {
            where: {
                id: req.body.brandId,
            }
        })
        res.json(success("Status update"))
    } catch (e) {
        // console.log(' Error Occur when Brand Status Update', e.message)
        res.json(error("Status is not update", e))
    }
}
updateRouter.put('/brand-status', TokenVerify(), wrapRequestHandler(handler))
