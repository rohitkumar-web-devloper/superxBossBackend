const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { VehicleParts, VehicleYears, Vehicle_segments } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const { product_id } = req.query
        const vehiclePart = await VehicleParts.findAll({
            attributes: ['vehicle_id'],
            where: {
                product_id: +product_id
            },
        })
        const vehicleYear = await VehicleYears.findAll({    
            attributes: ["vehicle_year", "vehicle_id"],
            where: {
                product_id: +product_id
            },
        })
        res.json(success("product-brand-vehicle", { ...vehiclePart, vehicleYear: [...vehicleYear] }))
    } catch (err) {
        res.json(error("product-brand-vehicle Error", err))
    }
}
retrieveRouter.get('/selected-product-brand-vehicle', TokenVerify(), wrapRequestHandler(handler))
