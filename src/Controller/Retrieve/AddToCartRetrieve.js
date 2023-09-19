const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Products, Brand, ProductImage} = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    const data = JSON.parse(req.query.data)
    try {
        const arr = [];
        for (const item of data) {
            const product = await Products.findOne({
                where: {
                    id: item.id,
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
            arr.push(product)
        }
        res.json(success("Product Retrieve", arr))
    } catch (err) {
        res.json(error("Product Retrieve Error", err))
    }

}
retrieveRouter.get('/add-to-cart-retrieve', AppTokenVarify(), wrapRequestHandler(handler))
