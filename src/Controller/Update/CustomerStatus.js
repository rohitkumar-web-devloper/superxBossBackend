const { updateRouter } = require('../../Routes/updateRoutes')
const { Customers } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { uploadImage } = require('../Helper')
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const { status, id } = req.body
        const customer = await Customers.update({ status: !status }, {
            where: {
                id
            }
        })
        res.json(success("status update"))
    } catch (e) {
        res.status(400).json(error("Please Select Image"))
    }


}
updateRouter.put('/customer-status-update', TokenVerify(), wrapRequestHandler(handler))
