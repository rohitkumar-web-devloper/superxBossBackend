const { updateRouter } = require('../../Routes/updateRoutes')
const { Vehicle_segments } = require("../../models")
const { body } = require('express-validator')
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Vehicle } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    const { name, catId } = req.body
    const editData = await Vehicle_segments.update(req.body, {
        where: {
            id: req.body.vehicleId
        }
    })
    res.json(success(("Vehicle update")))
}

updateRouter.put('/edit-vehicle', TokenVerify(), Update_Vehicle, validate([
    body("name").notEmpty().withMessage("Name is require"),
]), wrapRequestHandler(handler))
