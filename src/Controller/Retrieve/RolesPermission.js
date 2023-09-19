const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {RolePermissions} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {

    const roles = await RolePermissions.findAndCountAll({
        attributes:["id" , "name" , "isActive"]
    });
    res.json(success("Retrieve Users", roles))
}
retrieveRouter.get('/roles-permission', TokenVerify(), wrapRequestHandler(handler))
