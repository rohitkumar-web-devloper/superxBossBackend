const { createRouter } = require('../../Routes/createRoutes')
const { UserPermissions } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    const { user_id, permission_id } = req.body
    try {
        const exist = await UserPermissions.findOne({
            where: {
                user_id: user_id
            }
        })
        if (exist) {

            const del = await UserPermissions.destroy({
                where: {
                    user_id
                }
            })
            if (del) {
                permission_id.map(async (item) => {
                    const result = await UserPermissions.create({
                        user_id: user_id,
                        permission_id: item
                    })
                })
            }
        } else {
            permission_id.map(async (item) => {
                const result = await UserPermissions.create({
                    user_id: user_id,
                    permission_id: item
                })
            })
        }
        return res.json(success("user Permission Assigned"))
    } catch (e) {
        return res.json(error("user Permission Assigned Error"))
    }


}
createRouter.post("/user-assign-permission", TokenVerify(), wrapRequestHandler(handler));