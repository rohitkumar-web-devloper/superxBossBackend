const {createRouter} = require('../../Routes/createRoutes')
const {RolePermissions} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {body} = require('express-validator');
const {validate} = require("../../helper/validation")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    const {role_id, permission_id} = req.body
    try {
        const exist = await RolePermissions.findOne({
            where: {
                role_id: role_id
            }
        })
        if (exist) {
            const result = await RolePermissions.update({permission_id: JSON.stringify(permission_id)}, {
                where: {
                    role_id: role_id
                }
            })
        } else {
            const result = await RolePermissions.create({
                role_id: role_id,
                permission_id: JSON.stringify(permission_id)
            })
        }
        return res.json(success("role Permission Assigned"))
    } catch (e) {
        return res.json(error("role Permission Assigned Error"))
    }


}
createRouter.post("/role-assign-permission", TokenVerify(), wrapRequestHandler(handler));