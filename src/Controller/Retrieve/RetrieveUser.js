const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {User} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
// const {Op} = require('sequelize')
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const page = +req.query.page
        const limit = +req.query.limit
        const startIndex = (page - 1) * limit
        const endIndex = +limit
        const user = await User.findAndCountAll({
            attributes: ["id", "name", "mobile", "email", "role", "status", "profile_picture", "whats_app", "address" ,"createdAt"],
            offset: startIndex,
            limit: endIndex,
        })
        res.json(success("Retrieve Users", user))

    } catch (err) {
        res.json(error("Retrieve Users Error", err))
    }

}
retrieveRouter.get('/retrieve-user', TokenVerify(), wrapRequestHandler(handler))
