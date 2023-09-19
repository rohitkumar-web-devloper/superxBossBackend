const { updateRouter } = require('../../Routes/updateRoutes')
const { User } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { uploadImage } = require('../Helper')
const fs = require('fs')
const handler = async (req, res) => {
    try {
        const Image = req.files?.profile_picture
        let setImage
        const { name, mobile, email, whats_app, address } = req.body
        const data = await User.update({ name, mobile, email, whats_app, address }, {
            where: {
                id: req.login_token?.id,
            }
        })
        if (Image) {
            const data = await User.findOne({
                attributes: ["profile_picture"],
                where: {
                    id: req.login_token.id,
                },
            })
            if (data.profile_picture != "default-image.jpg") {
                fs.unlink(`assets/upload/user/${data.profile_picture}`, (err) => {
                    if (err) {
                        console.log("User Profile Image is not deleted ", err)
                        return;
                    } else {
                        console.log("User Profile Image Deleted Successfully")
                    }
                })
            }
            const ImageUpload = await uploadImage(Image, "upload/user/")
            setImage = await User.update({ profile_picture: ImageUpload }, {
                where: {
                    id: req.login_token.id,
                }
            })
        }
        if (data || setImage) {
            res.json(success("User update"))
        }
    } catch (e) {
        res.json(error("Enter valid Details", e))
    }
}

updateRouter.put('/user-details-update', TokenVerify(), wrapRequestHandler(handler))
