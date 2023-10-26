const { createRouter } = require('../../Routes/createRoutes')
const { User, RolePermissions, UserPermissions } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const bcrypt = require('bcryptjs');
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Create_User } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        console.log(req.body)
        const exist = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!exist) {
            const salt = bcrypt.genSaltSync();
            req.body.password = bcrypt.hashSync(req.body.password, salt);
            const user = await User.create({ ...req.body, user_id: req.login_token.id, status: 1 })
            const rolePermission = await RolePermissions.findAll({
                attributes: ["permission_id"],
                where: {
                    role_id: user.role
                }
            })
            if (rolePermission) {
                rolePermission.map(async (item, index) => {
                    const setuserPermission = await UserPermissions.create({ permission_id: item.permission_id, user_id: user.id })
                })
            }
            return res.json(success("User Created", user))
        } else {
            return res.json(error("Email Already Exist"))
        }
    } catch (e) {
        return res.status(400).json(error("Enter Valid Details"))
    }
}
createRouter.post("/user-create", TokenVerify(), Create_User, validate([
    body("name").notEmpty().withMessage("Name is requried"),
    body("mobile").notEmpty().withMessage("Mobile Number is requried").isMobilePhone().withMessage("Enter Valid Mobile Number"),
    body("email").notEmpty().withMessage("Email is requried").isEmail().withMessage("Enter Valid Email"),
    body("address").notEmpty().withMessage("Address is requried"),
    body("password").notEmpty().withMessage("Password is requried"),
    body("role").notEmpty().withMessage("Role is requried"),
]), wrapRequestHandler(handler));