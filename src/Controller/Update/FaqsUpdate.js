const { updateRouter } = require('../../Routes/updateRoutes')
const { Faqs } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { Update_Faq } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { status, question, answer, id } = req?.body
        console.log(req.body)
        console.log(typeof status)
        if (typeof (status) == 'boolean') {
            const result = await Faqs.update({ status: !status }, {
                where: {
                    id
                }
            })
        } else {
            const result = await Faqs.update({ question: question, answer: answer }, {
                where: {
                    id
                }
            })
        }

        res.json(success("Faqs Update"))
    } catch (e) {
        res.json(error("Faqs Update Error", e))
    }
}
updateRouter.put('/faqs-update', TokenVerify(), Update_Faq, wrapRequestHandler(handler))
