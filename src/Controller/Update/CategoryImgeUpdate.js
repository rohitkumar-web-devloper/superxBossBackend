const { updateRouter } = require('../../Routes/updateRoutes')
const { Categories } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { uploadImage } = require('../Helper')
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const fs = require('fs')
const { Update_Category } = require("../../Middleware/PermissionCheck")
// its api use in update Image for category and subCategory
const handler = async (req, res) => {
    try {
        const { image } = req.files
        if (image != null) {
            const data = await Categories.findOne({
                where: {
                    id: +req.body.id
                },
            })
            if (data.icon !== "default-image.jpg") {
                fs.unlink(`assets/upload/categories/${data.icon}`, (err) => {
                    if (err) {
                        console.log("Categories Image is not deleted ", err)
                        return;
                    } else {
                        console.log("File Deleted Successfully")
                    }
                })
            }
            const ImageUpload = await uploadImage(image, "upload/categories/")
            data.icon = `${ImageUpload}` || data.icon;
            await data.save()
            res.json(success("Image Upload Successfully", data))
        } else {
            res.status(400).json(error("Please Select Image"))

        }
    } catch (e) {
        res.status(400).json(error("Please Select Image"))
    }


}
updateRouter.put('/categoryImageUpload', TokenVerify(), Update_Category, wrapRequestHandler(handler))
