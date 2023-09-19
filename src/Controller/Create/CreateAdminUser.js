const {createRouter} = require('../../Routes/createRoutes')
const {Categories, User} = require("../../models")

const TokenVerify = require("../../Middleware/TokenVerify")

createRouter.post('/adminUser', TokenVerify, async (req, res) => {
    try {
        if (req.body.name != '' && req.body.description != '') {
            const userData = await Categories.create({
                ...req.body,
                profile_picture: "default-image.jpg",
                status: true,
                user_id: req.user_id
            })
            if (userData) {
                res.status(200).json({isSuccess: true, message: "create New Admin",})
            }
        }
    } catch (e) {
        res.json({isSuccess: false, message: "create New Admin failed"})
    }


})

