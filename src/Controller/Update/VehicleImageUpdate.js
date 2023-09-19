const {updateRouter} = require('../../Routes/updateRoutes')
const {Vehicle_segments} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {uploadImage} = require('../Helper')
const fs = require('fs')
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const {image} = req.files
        if (image != null) {
            const data = await Vehicle_segments.findOne({
                attributes: ["icon"],
                where: {
                    id: +req.body.id
                },

            })

            if (data.icon != "default-image.jpg") {
                fs.unlink(`assets/upload/vehicle/${data.icon}`, (err) => {
                    if (err) {
                        console.log("Categories Image is not deleted ", err)
                        return;
                    } else {
                        console.log("File Deleted Successfully")
                    }
                })
            }
            const ImageUpload = await uploadImage(image, "upload/vehicle/")
            const setImage = await Vehicle_segments.update({icon: ImageUpload}, {
                where: {
                    id: +req.body.id
                }
            })
            if (setImage) {
                res.json(success("Image Upload Successfully"))
            }
        } else {
            res.status(400).json(error("Please Select Image"))
        }
    } catch (e) {
        res.status(400).json(error("Please Select Image"))
    }

}
updateRouter.put('/vehicle-image-upload', TokenVerify(), wrapRequestHandler(handler))
