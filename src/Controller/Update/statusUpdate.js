const { updateRouter } = require('../../Routes/updateRoutes')
const { Categories } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { Update_Category } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {

    const data = await Categories.update({ status: !req.body.statusId }, {
        where: {
            id: req.body.catId,

        }
    })
    if (data) {
        res.json(success(("Status update")))
    }

}
updateRouter.put('/statusUpdate', TokenVerify(), Update_Category, wrapRequestHandler(handler))
