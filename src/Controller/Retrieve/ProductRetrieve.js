const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage, ProductBulkDiscount, VehicleSegmentType } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const vehiclesegmenttype = require('../../models/vehiclesegmenttype')

const handler = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    const startIndex = (page - 1) * limit
    const endIndex = +limit
    try {
        const product = await Products.findAll({
            offset: startIndex,
            limit: endIndex,
            include: [
                {
                    attributes: ["name", "id"],
                    model: Brand,
                    as: "brand"
                },
                {
                    attributes: ["product_image"],
                    model: ProductImage,
                    as: "productImage"
                },
                {
                    attributes: ["item_count", "bulk_discount" ,"id"],
                    model: ProductBulkDiscount,
                    as: "bulkDiscount"
                },
                {
                    attributes: ["name"],
                    model: VehicleSegmentType,
                    as: "segment"
                }
            ]
        })
        const count = await Products.count()
        res.json(success("Product Retrieve", { count: count, rows: product }))
    } catch (err) {
        res.json(error("Product Retrieve Error", err))
    }
}
retrieveRouter.get('/product-retrieve', TokenVerify(), wrapRequestHandler(handler))
