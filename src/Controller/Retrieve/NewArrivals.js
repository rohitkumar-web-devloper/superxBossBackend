const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const product = await Products.findAll({
            where: {
                new_arrival: true
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
        res.json(success("New Arrival Retrieve", product))
    } catch (err) {
        res.json(error("New Arrival Retrieve Error", err))
    }
}
retrieveRouter.get('/new-arrival', AppTokenVarify(), wrapRequestHandler(handler))
