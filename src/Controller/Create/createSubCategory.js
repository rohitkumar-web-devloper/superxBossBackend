const { createRouter } = require('../../Routes/createRoutes')
const { Categories, User } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Create_Category } = require('../../Middleware/PermissionCheck')

const handler = async (req, res) => {
    const { name, description, parent } = req.body;
    try {
        const exist = await Categories.findOne({
            where: {
                name: name
            }
        })
        if (exist) {
            return res.json(error("Sub-Category Already Exist"))
        } else {
            const category = await Categories.create({
                name,
                description,
                icon: "default-image.jpg",
                status: true,
                featured: false,
                parent: parent,
                user_id: req.login_token.id
            })
            res.json(success("Sub-Category Created", category))
        }
    } catch (e) {
        res.json(error("Sub-Category Created failed", e))
    }
}
createRouter.post("/create-sub-category", TokenVerify(), Create_Category, validate([
    body("name").notEmpty().withMessage("Name field is required"),
]), wrapRequestHandler(handler));

