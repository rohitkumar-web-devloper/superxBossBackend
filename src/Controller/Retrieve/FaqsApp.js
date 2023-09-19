const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Faqs } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const faqs = await Faqs.findAll({
            attributes: ["id", "question", "answer"],
            where: {
                status: true
            }
        });
        res.json(success(" Faqs Retrieve", faqs))
    } catch (err) {
        res.json(error("Faqs Error", err))
    }
}
retrieveRouter.get('/faqs-retrieve-app', AppTokenVarify(), wrapRequestHandler(handler))
