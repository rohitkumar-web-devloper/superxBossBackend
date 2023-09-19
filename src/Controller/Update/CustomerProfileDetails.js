const { updateRouter } = require('../../Routes/updateRoutes')
const { Customers } = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { body } = require('express-validator');
const handler = async (req, res) => {
    try {
        let data = await Customers.update(req.body, {
            where: {
                id: req.login_token.id
            }
        })
        if (data) {
            const result = await Customers.findOne({
                attributes: ["first_name", "last_name", "mobile", "profile_picture" , "email"],
                where: {
                    id: req.login_token.id
                }
            })
            console.log(result)
            res.json(success("User Details update", result))
        }
    } catch (err) {
        res.json(error("User Details update Error"))
    }
}
updateRouter.put('/customer-profile-details', AppTokenVerify(), validate([
    body("first_name").notEmpty().withMessage("FirstName is required"),
    // body("last_name").notEmpty().withMessage("LastName is required"),
]), wrapRequestHandler(handler))
