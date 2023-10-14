const { createRouter } = require('../../Routes/createRoutes')
const { CategoryProduct, Products } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        const { product_id, category_id } = req?.body
        const product = await CategoryProduct.destroy({
            where: {
                product_id
            }
        })
        category_id.map(async (item) => {
            await CategoryProduct.create({ product_id, category_id: item })
        })
        return res.json(success("Assign successfull"))
    } catch (e) {
        return res.json(error("Something is worng"))
    }
}
createRouter.post("/category-product-assign", TokenVerify(), wrapRequestHandler(handler));
