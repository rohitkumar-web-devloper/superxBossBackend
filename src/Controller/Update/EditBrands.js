const { updateRouter } = require('../../Routes/updateRoutes')
const { Brand } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Brand } = require('../../Middleware/PermissionCheck')
const e = require('express')
const handler = async (req, res) => {
    try {
        const { name, description, type, brand_day_offer, brandId, logo, status, brand_day } = req.body
        const exist = await Brand.findOne({
            where: {
                id: brandId
            }
        })
        if (typeof status == 'boolean') {
            exist.status = !status
        }
        if (typeof brand_day == 'boolean') {
            exist.brand_day = !brand_day
        }
        exist.name = name || exist.name
        exist.logo = logo || exist.logo
        exist.description = description || exist.description
        exist.type = type || exist.type
        exist.brand_day_offer = brand_day_offer || exist.brand_day_offer
        await exist.save()
        res.json(success("Brand updated", exist))
    } catch (e) {
        res.json(error("Brand is not update"))
    }
}
updateRouter.put('/edit-brand', TokenVerify(), Update_Brand, wrapRequestHandler(handler))
