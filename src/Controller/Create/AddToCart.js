const { createRouter } = require('../../Routes/createRoutes')
const { MyCart } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    const { name, id, price, b2b_price, any_discount, brand_id, item_stock } = req.body
    try {
        const myCart = await MyCart.create({
            name,
            product_id: id,
            price,
            b2b_price,
            any_discount,
            brand_id,
            item_stock,
            user_id: req.login_token?.id
        })

        return res.json(success("Category Created"))
    } catch (e) {
        return res.json(error("Enter Valid Details", e))
    }


}
createRouter.post("/add-to-cart", AppTokenVarify(), wrapRequestHandler(handler));