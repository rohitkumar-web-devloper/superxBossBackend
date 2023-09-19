const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { VehicleYears } = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {

            year = await VehicleYears.findAll({
                attributes: [['id' , "value"],["vehicle_year" , "label"]],
                where: {
                    vehicle_id: req.query.id
                },
            })

        res.json(success("Spare Parts Brands Retrieve ", year))

    } catch (e) {
        res.status(400).json(error("Spare Parts Brands Retrieve Error", e))
    }
}
retrieveRouter.get('/vehicle-year-app', AppTokenVerify(), wrapRequestHandler(handler))
