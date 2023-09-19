const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {UserAddress} = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const userAddress = await UserAddress.findAll({
            where: {
                user_id: req.login_token.id 
            },
        })
        res.json(success("User Address Retrieve ", userAddress))

    } catch (e) {
        res.status(400).json(error("User Address Retrieve Error", e))
    }
}
retrieveRouter.get('/user-address-retrieve', AppTokenVerify(), wrapRequestHandler(handler))
