const { createRouter } = require('../../Routes/createRoutes')
const { Faqs } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Create_Faq } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    const { question, answer } = req.body;
    try {
        const faqs = await Faqs.create({ question: question, answer: answer, status: true, user_id: req.login_token.id })
        return res.json(success("Faqs Created"))
    } catch (e) {
        return res.json(error("Enter Valid Details", e))
    }
}
createRouter.post("/faqs-create", TokenVerify(), Create_Faq, validate([
    body("question").notEmpty().withMessage("Question is required"),
    body("answer").notEmpty().withMessage("Answer is required")
]), wrapRequestHandler(handler));
