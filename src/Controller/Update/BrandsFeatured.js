const { updateRouter } = require('../../Routes/updateRoutes')
const { Brand } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Brand } = require("../../Middleware/PermissionCheck")
const handler = async (req, res) => {
    try {
        const data = await Brand.update({ featured: !req.body.featuredId }, {
            where: {
                id: req.body.id,
            }
        })
        res.json(success("featured update"))


    } catch (e) {
        // console.log(' Error Occur when featured Update', e.message)
        res.json(error("featured is not update", e))
    }
}
updateRouter.put('/brand-featured', TokenVerify(), Update_Brand, wrapRequestHandler(handler))
