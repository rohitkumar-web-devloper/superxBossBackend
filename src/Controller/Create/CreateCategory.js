const {createRouter} = require('../../Routes/createRoutes')
const {Categories, User} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {body} = require('express-validator');
const {validate} = require("../../helper/validation")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    const {name, description} = req.body;
    try {
        const exist = await Categories.findOne({
            where: {
                name: name
            }
        })
        if (exist) {
            return res.json(error("Category Already Exist"))
        } else {
            const category = await Categories.create({
                name,
                description,
                icon: "default-image.jpg",
                status: true,
                featured: false,
                user_id: req.login_token?.id
            })
            return res.json(success("Category Created"))
        }

    } catch (e) {
        return res.json(error("Enter Valid Details", e))
    }


}
createRouter.post("/createCategory", TokenVerify(), validate([
    body("name").notEmpty().withMessage("Name is required field"),
]), wrapRequestHandler(handler));
