const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const product = await Products.findAll({
            where: {
                brand_id: +req.query.brandId
            },
            include: [
                {
                    attributes: ["name"],
                    model: Brand,
                    as: "brand"
                },
                {
                    attributes: ["product_image"],
                    model: ProductImage,
                    as: "productImage"
                }
            ]
        })
        const count = await Products.count({
            where: {
                brand_id: req.query.brandId
            }
        })
        res.json(success("Product Retrieve", { count: count, rows: product }))
    } catch (err) {
        res.json(error("Product Retrieve Error", err))
    }
}
retrieveRouter.get('/product-list-app', AppTokenVarify(), wrapRequestHandler(handler))
