const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Vehicle_segments, User } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {

        const vehicleSegments = await Vehicle_segments.findAll({
            attributes: [["id", "value"], ["name", "label"]],
            where: {
                brand_id: req.query.brand_id
            },
            include: [
                {
                    attributes: ["name"],
                    model: User,
                    as: "user"
                }
            ]
        })
        res.json(success("Vehicle Retrieve", vehicleSegments))

    } catch (e) {
        res.json(error("Vehicle Retrieve Error", e))
    }
}

retrieveRouter.get('/vehicle-model-retrieve-app', AppTokenVarify(), wrapRequestHandler(handler))
