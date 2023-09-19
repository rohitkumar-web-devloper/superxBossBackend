const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Categories} = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const categories = await Categories.findAll({
            attributes: [['id' , "value"],["name" , "label"] , "icon"],
            where: {
                parent: null
            },
        })
        res.json(success("Category Retrieve ", categories))
    } catch (err) {
        res.json(error("Category Retrieve Error", err))
    }
}
retrieveRouter.get('/main-category-app', AppTokenVerify(), wrapRequestHandler(handler))
