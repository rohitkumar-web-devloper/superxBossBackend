const { updateRouter } = require('../../Routes/updateRoutes')
const { Categories } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { Update_Category } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {

    const data = await Categories.update({ featured: !req.body.featuredId }, {
        where: {
            id: req.body.catId,

        }
    })
    if (data) {
        res.json(success(("featured update")))
    }

}
updateRouter.put('/featuredUpdate', TokenVerify(), Update_Category, wrapRequestHandler(handler))
