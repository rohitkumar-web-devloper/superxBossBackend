const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Categories, User } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const startIndex = (page - 1) * limit
        const endIndex = +limit
        const subCategory = await Categories.findAndCountAll({
            where: {
                parent: +req.query.catId
            },
            offset: startIndex,
            limit: endIndex,
            include: [
                {
                    attributes: ["name"],
                    model: User,
                    as: "user"
                }
            ]
        })
        res.json(success("Sub Category Retrieve ", subCategory))

    } catch (e) {
        res.json(error("Sub Category Retrieve Error", e))
    }
}
retrieveRouter.get('/subCategoriesRetrieve', TokenVerify(), wrapRequestHandler(handler))
