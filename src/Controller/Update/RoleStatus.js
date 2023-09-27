const {updateRouter} = require('../../Routes/updateRoutes')
const {Roles} = require("../../models")

const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler} = require("../../helper/response")
const {validate} = require("../../helper/validation")
const {Update_Role}= require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const result = await Roles.update({isActive: !req.body.statusId}, {
            where: {
                id: req.body.id,
            }
        })
        res.json(success("Roles Status Update"))
    } catch (e) {
        res.json(error("Roles Status Update Error", e))
    }

}

updateRouter.put('/role-status', TokenVerify(),Update_Role, wrapRequestHandler(handler))
