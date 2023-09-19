const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Faqs } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const faqs = await Faqs.findAll();
        res.json(success(" Faqs Retrieve", faqs))
    } catch (err) {
        res.json(error("Faqs Error", err))
    }
}
retrieveRouter.get('/faqs-retrieve', TokenVerify(), wrapRequestHandler(handler))
