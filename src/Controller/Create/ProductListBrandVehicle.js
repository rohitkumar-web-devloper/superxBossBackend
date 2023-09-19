const { createRouter } = require('../../Routes/createRoutes')
const { VehicleParts, VehicleYears } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    const { vehicle_id, product_id, year, brand_id } = req.body
    const ro = JSON.stringify(vehicle_id)
    try {
        if (vehicle_id.length) {
            const exist = await VehicleParts.findOne({
                where: {
                    product_id: product_id,
                }
            })
            if (exist) {
                const category = await VehicleParts.update({ vehicle_id: ro }, {
                    where: {
                        product_id: product_id
                    }
                })
            }
            const deleteExistYear = await VehicleYears.destroy({
                where: {
                    product_id: product_id
                }
            })
            year.map((item) => {
                item?.years?.map((row,) => {
                    const rowResult = VehicleYears.create({
                        product_id: product_id,
                        vehicle_id: item.vehicle_id,
                        product_brand_id: +brand_id,
                        vehicle_year: row,
                    })
                })
            })
            return res.json(success("product listed in Brand"))
        } else {
            return res.status(400).json(error("Please Select At least one value"))
        }
    } catch (e) {
        return res.status(400).json(error("Enter Valid Details", e))
    }
}
createRouter.post("/product-list-brand-vehicle", TokenVerify(), wrapRequestHandler(handler));