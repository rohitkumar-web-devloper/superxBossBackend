const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { User } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: ["name", "mobile", "email", "profile_picture", "whats_app", "address" , "role"],
            where: {
                id: req.login_token?.id,
            }
        })
        res.json(success("Retrieve Users", user))
    } catch (err) {
        res.json(error("Retrieve Users Error", err))
    }
}
retrieveRouter.get('/login-user-retrieve', TokenVerify(), wrapRequestHandler(handler))
