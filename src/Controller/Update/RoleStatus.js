const { updateRouter } = require('../../Routes/updateRoutes')
const { Roles } = require("../../models")

const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Role } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { id, status } = req.body
        const exist = await Roles.findOne({
            where: {
                id
            }
        })
        exist.isActive = !status
        await exist.save()
        res.json(success("Roles Status Update", exist))
    } catch (e) {
        res.json(error("Roles Status Update Error", e))
    }

}

updateRouter.put('/role-status', TokenVerify(), Update_Role, wrapRequestHandler(handler))
