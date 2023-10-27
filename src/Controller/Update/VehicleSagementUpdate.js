const { updateRouter } = require('../../Routes/updateRoutes')
const { Vehicle_segments } = require("../../models")
const { body } = require('express-validator')
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Vehicle } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    const { description, vehicleId, name, status } = req.body
    const exist = await Vehicle_segments.findOne({
        where: {
            id: vehicleId
        }
    })

    exist.status = status == true ? false : true || exist.status
    exist.name = name || exist.name
    exist.description = description || exist.description
    exist.save()
    res.json(success("Vehicle update", exist))
}

updateRouter.put('/edit-vehicle', TokenVerify(), Update_Vehicle, wrapRequestHandler(handler))
