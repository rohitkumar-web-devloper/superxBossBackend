const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const limit = req.query?.limit
        let result;
        if (req.query.limit) {
            result = +limit.charAt(0)
        }
        let product
        if (result) {
            product = await Products.findAll({
                where: {
                    trend_part: true
                },
                limit: result,
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
        } else {
            product = await Products.findAll({
                where: {
                    trend_part: true
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
        }
        res.json(success("Trending Parts Retrieve", { rows: product }))
    } catch (err) {
        res.json(error("Trending Parts Retrieve Error", err))
    }
}
retrieveRouter.get('/trending-parts', AppTokenVarify(), wrapRequestHandler(handler))
