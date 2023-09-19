const {updateRouter} = require('../../Routes/updateRoutes')
const {Vehicle_segments} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const data = await Vehicle_segments.update({status: !req.body.statusId}, {
            where: {
                id: req.body.vehicleId,
            }
        })
        if (data) {
            res.json(success("Status Update"))
        }
    } catch (e) {

        res.json(error("Status is not Updated" , e.message))
    }
}
updateRouter.put('/vehicle-status', TokenVerify(), wrapRequestHandler(handler))
