const { createRouter } = require('../../Routes/createRoutes')
const { Roles } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const bcrypt = require('bcryptjs');
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Create_Role } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const role = await Roles.create({ ...req.body, isActive: 1 })
        return res.json(success("User Created", role))
    } catch (e) {
        return res.json(error("Enter Valid Details"))
    }
}
createRouter.post("/role-create", TokenVerify(), Create_Role, validate([
    body("name").notEmpty().withMessage("Name is requried"),
]), wrapRequestHandler(handler));