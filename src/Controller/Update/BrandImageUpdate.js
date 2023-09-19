const {updateRouter} = require('../../Routes/updateRoutes')
const {Brand} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")
const {uploadImage} = require('../Helper')
const fs = require('fs')
const handler = async (req, res) => {

    try {
        const {image} = req.files
        if (image != null) {
            const data = await Brand.findOne({
                attributes: ["logo"],
                where: {
                    id: req.body.id
                },

            })
            console.log(data.icon)
            if (data.logo !== "default-image.jpg") {
                fs.unlink(`assets/upload/brands/${data.logo}`, (err) => {
                    if (err) {
                        console.log("Categories Image is not deleted ", err)
                        return;
                    } else {
                        console.log("File Deleted Successfully")
                    }
                })
            }
            const ImageUpload = await uploadImage(image, "upload/brands/")
            const setImage = await Brand.update({logo: ImageUpload}, {
                where: {
                    id: req.body.id
                }
            })
            if (setImage) {
                res.json(success("Image Upload Successfully"))
            }
        }else{
            res.status(400).json(error("Please Select Image"))
        }
    } catch (e) {
        res.status(400).json(error("Please Select Image"))
    }
}
updateRouter.put('/brand-image-upload', TokenVerify(), wrapRequestHandler(handler))
