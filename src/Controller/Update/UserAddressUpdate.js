const {updateRouter} = require('../../Routes/updateRoutes')
const {UserAddress} = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")
const handler = async (req, res) => {
    const {name , mobile , pin_code , street_address , city , state , type , id} = req.body
    console.log(name , mobile)
    try {
        const data = await UserAddress.update({name , mobile , pin_code , street_address , city , state , type }, {
            where: {
                id: id,
            }
        })
        res.json(success("Address update" , data))
    } catch (e) {
        res.json(error("Status is not update", e))
    }
}
updateRouter.put('/user-address-update', AppTokenVerify(), wrapRequestHandler(handler))
