const { updateRouter } = require('../../Routes/updateRoutes')
const { User } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_User } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const data = await User.update({ status: !req.body.statusId }, {
            where: {
                id: req.body.id,
            }
        })
        if (data) {
            res.json(success("Status update"))
        }
    } catch (e) {
        res.json(error("Status is not update", e))
    }
}

updateRouter.put('/user-status-update', TokenVerify(), Update_User, wrapRequestHandler(handler))
