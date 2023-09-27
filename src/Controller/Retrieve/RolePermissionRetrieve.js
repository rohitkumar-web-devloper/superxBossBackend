const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { RolePermissions } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const rolePermissions = await RolePermissions.findAll({
            attributes: ['role_id', 'permission_id'],
            where: {
                role_id: req.query.role_id
            }
        });
        res.json(success("Role Permission Retrieve ", rolePermissions))
    } catch (e) {
        res.status(400).json(error("Role Permission Retrieve Error", e))
    }
}
retrieveRouter.get('/role-permission-retrieve', TokenVerify(), wrapRequestHandler(handler))
