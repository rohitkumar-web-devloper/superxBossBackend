const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const raw = JSON.parse(req.query.data)
        let count = 0
        let result = [];
        await Promise.all(raw.map(async item => {
            const product = await Products.findOne({
                where: {
                    id: item.product_id
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
                // raw: true
            })
            count += 1
            result.push(product)
        }))
        console.log(result)
        return res.json(success("like product retrieve", { rows: result, count: count }))
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e))
    }
}
retrieveRouter.get('/segment-show-product', AppTokenVarify(), wrapRequestHandler(handler))
