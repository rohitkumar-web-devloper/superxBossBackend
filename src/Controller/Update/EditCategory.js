const {updateRouter} = require('../../Routes/updateRoutes')
const {Categories} = require("../../models")
const {body} = require('express-validator')
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler} = require("../../helper/response")
const {validate} = require("../../helper/validation")
// its api use in update category and subCategory
const handler = async (req, res) => {
    const {name , catId} = req.body
    const editData = await Categories.update(req.body, {
        where: {
            id: req.body.catId
        }
    })
    res.json(success(("Category update")))
}

updateRouter.put('/editCategory', TokenVerify(), validate([
    body("name").notEmpty().withMessage("Name is require"),
]), wrapRequestHandler(handler))
