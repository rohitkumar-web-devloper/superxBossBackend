const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Products , Brand, ProductImage} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    const startIndex = (page - 1) * limit
    const endIndex = +limit
    try {
        const product = await Products.findAndCountAll({
            offset: startIndex,
            limit: endIndex,
            include: [
                {
                    model: Brand,
                    as: "brand",
                    attributes: ["name"],
                },
                {
                    model: ProductImage,
                    as: "productImage",
                    attributes: ["product_image"],
                }
            ]
        })
        res.json(success("Product Retrieve" , product))
    } catch (err) {
        res.json(error("Product Retrieve Error" , err))
    }
}
retrieveRouter.get('/product-brand-model', TokenVerify(), wrapRequestHandler(handler))
