const {deleteRouter} = require('../../Routes/deleteRoutes')
const {MyCart} = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    console.log(req.body)
    // try {
    //     const myCart = await MyCart.destroy({
    //         where:{
    //             id : req.body.id
    //         }
    //     })
    //     res.json(success("Remove Cart Data" , product))
    // } catch (err) {
    //     res.json(error("Product Retrieve Error" , err))
    // }
}
deleteRouter.delete('/cart-data-remove', AppTokenVarify(), wrapRequestHandler(handler))