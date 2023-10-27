const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { ProductBulkDiscount, VehicleParts, Brand, Vehicle_segments } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const discount = await ProductBulkDiscount.findAll({
            attributes: ["item_count", "bulk_discount"],
            where: {
                product_id: +req.query.id
            }
        })
        const data = await VehicleParts.findOne({
            attributes: ['vehicle_brand_id', "vehicle_id"],
            where: {
                product_id: +req.query.id,
            },
        })
        if (data != null) {
            const ValidBrand = JSON.parse(data.vehicle_brand_id)
            const ValidVehicle = JSON.parse(data.vehicle_id)
            let result = []
            await Promise.all(ValidVehicle.map(async (item) => {
                await Promise.all(ValidBrand.map(async (row) => {
                    const rowData = await Vehicle_segments.findAll({
                        attributes: ["id", "name",],
                        where: {
                            id: item,
                            brand_id: row,
                        },
                        include: [
                            {
                                model: Brand,
                                as: "compData",
                                attributes: ["name"],
                            },
                        ]
                    })
                    if (rowData.length > 0) {
                        await result.push(...rowData)
                    }

                }))
            }))
            res.json(success(" Bulk Discount Retrieve ", { discount: discount, result: result }))
        } else {
            res.json(success(" Bulk Discount Retrieve ", { discount: discount }))
        }
    } catch (err) {
        res.json(error("Bulk DiscountRetrieve Error", err))
    }
}
retrieveRouter.get('/bulk-discount', AppTokenVarify(), wrapRequestHandler(handler))
