const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Categories, User } = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const subCategory = await Categories.findAll({
            where: {
                parent: +req.query.catId
            },

        })
        res.json(success("Sub Category Retrieve ", subCategory))

    } catch (e) {
        res.json(error("Sub Category Retrieve Error", e))
    }
}
retrieveRouter.get('/sub-category-app', AppTokenVerify(), wrapRequestHandler(handler))
