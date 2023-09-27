const { createRouter } = require('../../Routes/createRoutes')
const { VehicleParts } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Product } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    const { vehicle_brand, product_id, product_name, product_brand_id } = req.body
    const ro = JSON.stringify(vehicle_brand)
    try {
        if (vehicle_brand.length) {
            const exist = await VehicleParts.findOne({
                where: {
                    product_id: product_id,
                }
            })
            if (exist) {
                const category = await VehicleParts.update({ vehicle_brand_id: ro }, {
                    where: {
                        product_id: product_id
                    }
                })
            } else {
                const category = await VehicleParts.create({
                    product_id: product_id,
                    product_name,
                    product_brand_id,
                    vehicle_brand_id: ro
                })
            }

            return res.json(success("product listed in Brand"))
        } else {
            return res.status(400).json(error("Please Select At least one value"))
        }

    } catch (e) {
        return res.status(400).json(error("Enter Valid Details", e))
    }
}
createRouter.post("/product-list-brand", TokenVerify(), Update_Product, wrapRequestHandler(handler));