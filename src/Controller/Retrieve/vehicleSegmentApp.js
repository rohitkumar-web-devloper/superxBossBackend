const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { VehicleSegmentType } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const limit = req.query?.limit
        let result;
        if (req.query.limit) {
            result = +limit.charAt(0)
        }
        let vehicleSegments
        if (result) {
            vehicleSegments = await VehicleSegmentType.findAll({
                attributes: ['id', "name", "icon"],
                limit: result
            })
        } else {
            vehicleSegments = await VehicleSegmentType.findAll({
                attributes: ['id', "name", "icon"],
            })
        }
        res.json(success("Vehicle Segment Retrieve", vehicleSegments))

    } catch (e) {
        res.json(error("Vehicle Segment Retrieve Error", e))
    }
}

retrieveRouter.get('/vehicle-segment-retrieve-app', AppTokenVarify(), wrapRequestHandler(handler))
