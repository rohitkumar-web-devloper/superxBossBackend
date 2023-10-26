const { updateRouter } = require('../../Routes/updateRoutes')
const { Categories } = require("../../models")
const { body } = require('express-validator')
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Category } = require('../../Middleware/PermissionCheck')
// its api use in update category and subCategory
const handler = async (req, res) => {
    const { name, catId, description, featuredId, statusId } = req.body
    const editData = await Categories.findOne({
        where: {
            id: req.body.catId
        }
    })
    if (typeof featuredId == 'boolean') {
        editData.featured = !req.body.featuredId;
    }
    if (typeof statusId == 'boolean') {
        editData.status = !statusId
    }
    editData.name = name || editData.name
    editData.description = description || editData.description
    await editData.save()
    res.json(success("Category update", editData))
}
updateRouter.put('/edit-category', TokenVerify(), Update_Category, wrapRequestHandler(handler))
