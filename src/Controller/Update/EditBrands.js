const { updateRouter } = require('../../Routes/updateRoutes')
const { Brand } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Brand } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const editData = await Brand.update(req.body, {
            where: {
                id: req.body.brandId
            }
        })
        res.json(success("Brand updated"))
    } catch (e) {
        res.json(error("Brand is not update"))
    }
}
updateRouter.put('/edit-brand', TokenVerify(), Update_Brand, wrapRequestHandler(handler))
