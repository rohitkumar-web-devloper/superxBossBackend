const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage, ProductBulkDiscount } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const getData = await Products.findAll({
            where: {
                id: JSON.parse(req.query.data)
            },
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
                    attributes: ["item_count", "bulk_discount", "id"],
                    model: ProductBulkDiscount,
                    as: "bulkDiscount"
                }
            ]
        })
        res.json(success("ypo", { rows: getData, count: getData.length }))
    } catch (err) {
        res.json(error("Banner Retrieve Error", err))
    }
}
retrieveRouter.get('/banner-product', AppTokenVarify(), wrapRequestHandler(handler))
