const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { UserPermissions } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const userPermissions = await UserPermissions.findAll({
            attributes: ['user_id', 'permission_id'],
            where: {
                user_id: req.query.user_id
            }
        });
        res.json(success("User Permission Retrieve ", userPermissions))
    } catch (e) {
        res.status(400).json(error("User Permission Retrieve Error", e))
    }
}
retrieveRouter.get('/user-permission-retrieve', TokenVerify(), wrapRequestHandler(handler))
