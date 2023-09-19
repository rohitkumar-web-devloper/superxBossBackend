const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Roles} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {

    const roles = await Roles.findAndCountAll({
        attributes:["id" , "name" , "isActive"]
    });
    res.json(success("Retrieve Users", roles))
}
retrieveRouter.get('/roles-retrieve', TokenVerify(), wrapRequestHandler(handler))
