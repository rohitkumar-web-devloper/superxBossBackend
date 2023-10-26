const { updateRouter } = require('../../Routes/updateRoutes')
const { User } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { uploadImage } = require('../Helper')
const fs = require('fs')
const { Update_User } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const Image = req.files?.profile_picture
        let setImage
        const { name, mobile, email, whats_app, address, id, role, status } = req.body
        const data = await User.findOne({
            where: {
                id: id || req.login_token.id
            },
        })
        data.name = name || data.name
        data.mobile = mobile || data.mobile
        data.email = email || data.email
        data.whats_app = whats_app || data.whats_app
        data.address = address || data.address
        data.role = role || data.role
        data.status = !status
        if (Image) {
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
            data.profile_picture = ImageUpload || data.profile_picture
        }
        await data.save()
        res.json(success("User update", data))
    } catch (e) {
        res.json(error("Enter valid Details", e))
    }
}

updateRouter.put('/user-details-update', TokenVerify(), Update_User, wrapRequestHandler(handler))
