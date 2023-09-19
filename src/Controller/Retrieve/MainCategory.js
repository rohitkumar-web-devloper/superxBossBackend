const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Categories, User} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler , error} = require("../../helper/response")

const handler = async (req, res) => {
   try {
       const page = req.query.page
       const limit = req.query.limit
       const startIndex = (page - 1) * limit
       const endIndex = +limit
       const category = await Categories.findAndCountAll({
           where: {
               parent: null
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
       res.json(success("Category Retrieve", category))
   }catch (e) {
       res.json(error("Category Retrieve Error" , e))
   }

}

retrieveRouter.get('/maincategories', TokenVerify(), wrapRequestHandler(handler))
