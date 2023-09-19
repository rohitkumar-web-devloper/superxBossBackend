const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {

        const product = await Products.findAll({
            where: {
                pop_item: true
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
            ],
        })

        console.log(product)
        res.json(success("New Arrival Retrieve", product))
    } catch (err) {
        res.json(error("New Arrival Retrieve Error", err))
    }
}
retrieveRouter.get('/pop-item-retrieve', AppTokenVarify(), wrapRequestHandler(handler))
