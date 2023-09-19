const {updateRouter} = require('../../Routes/updateRoutes')
const {Products} = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const data = await Products.update({wish_product: !req.body.wish}, {
            where: {
                id: req.body.id,
            }
        })
        if (data) {
            res.json(success("Add Wishlist"))
        }
    } catch (e) {
        res.json(error("Add Wishlist is not Updated" , e.message))
    }
}
updateRouter.put('/wishlist-product-update', AppTokenVarify(), wrapRequestHandler(handler))
