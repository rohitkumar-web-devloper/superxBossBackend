const {updateRouter} = require('../../Routes/updateRoutes')
const {Brand} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")
const handler = async  (req , res)=>{
    console.log(req.body)
    try {
        const editData = await Brand.update(req.body, {
            where: {
                id: req.body.brandId
            }
        })
       res.json(success("Brand updated"))
    } catch (e) {
        res.json(error("Brand is not update"))
    }
}
updateRouter.put('/edit-brand', TokenVerify(),wrapRequestHandler(handler))
