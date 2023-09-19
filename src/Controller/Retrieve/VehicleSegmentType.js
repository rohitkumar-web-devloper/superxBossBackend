const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { VehicleSegmentType } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const VehicleSegment = await VehicleSegmentType.findAll({
            attributes:['id' , 'name']
        })
        res.json(success("Vehicle Segment Type Retrieve ", VehicleSegment))
    } catch (e) {
        res.json(error("Vehicle Segment Type Retrieve  Error", e))
    }
}
retrieveRouter.get('/vehicle-segment-type', TokenVerify(), wrapRequestHandler(handler))
