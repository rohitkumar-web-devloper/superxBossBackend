const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Vehicle_segments, User} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler , error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const startIndex = (page - 1) * limit
        const endIndex = +limit
        const vehicleSegments = await Vehicle_segments.findAndCountAll({
            offset: startIndex,
            limit: endIndex,
            where:{
                brand_id : req.query.brand_id
            },
            include: [
                {
                    attributes: ["name"],
                    model: User,
                    as: "user"
                }
            ]
        })
        res.json(success("Vehicle Retrieve", vehicleSegments))

    } catch (e) {
       res.json(error("Vehicle Retrieve Error" , e))
    }
}

retrieveRouter.get('/vehicle-segments-retrieve', TokenVerify(), wrapRequestHandler(handler))
