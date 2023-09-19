const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Brand, Products, Categories, Orders, User, Customers } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const brand = await Brand.count()
        const customer = await Customers.count()
        const product = await Products.count()
        const categories = await Categories.count()
        const order = await Orders.count()
        const user = await User.count()
        res.json(success("Spare Parts Brands Retrieve ", [{ name: 'brand', count: brand }, { name: 'customer', count: customer }, { name: 'product', count: product }, { name: "catrgories", count: categories }, { name: "order", count: order }, { name: 'user', count: user }]))

    } catch (e) {
        res.status(400).json(error("Spare Parts Brands Retrieve Error", e))
    }
}
retrieveRouter.get('/dashboard-data', TokenVerify(), wrapRequestHandler(handler))
