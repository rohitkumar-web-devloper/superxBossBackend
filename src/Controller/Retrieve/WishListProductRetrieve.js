const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Products, Brand, ProductImage} = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    const startIndex = (page - 1) * limit
    const endIndex = +limit
    try {
        const product = await Products.findAll({
            where: {
                wish_product: true
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
                wish_product: true
            }
        })

        res.json(success("Wishlist Product Retrieve", {count: count, rows: product}))
    } catch (err) {
        res.json(error("Wishlist Product Retrieve Error", err))
    }
}
retrieveRouter.get('/wishlist-product', AppTokenVarify(), wrapRequestHandler(handler))
