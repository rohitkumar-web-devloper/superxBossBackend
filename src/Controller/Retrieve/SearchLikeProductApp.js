const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Op } = require("sequelize");
const handler = async (req, res) => {
    try {
        const { value } = req.query
        const result = await Products.findAll({
            where: {
                name: { [Op.like]: "%" + value + "%" },
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
                }
            ]
        })
        return res.json(success("like product retrieve", result))
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e))
    }
}
retrieveRouter.get('/search-like-product', AppTokenVarify(), wrapRequestHandler(handler))
