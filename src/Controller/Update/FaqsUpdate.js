const { updateRouter } = require('../../Routes/updateRoutes')
const { Faqs } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Faq } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { status, question, answer, id } = req?.body
        const exist = await Faqs.findOne({
            where: {
                id
            }
        })
        if (typeof (status) == 'boolean') {
            exist.status = !status
        } else {
            exist.question = question
            exist.answer = answer
        }
        await exist.save()
        res.json(success("Faqs Update", exist))
    } catch (e) {
        res.json(error("Faqs Update Error", e))
    }
}
updateRouter.put('/faqs-update', TokenVerify(), Update_Faq, wrapRequestHandler(handler))
