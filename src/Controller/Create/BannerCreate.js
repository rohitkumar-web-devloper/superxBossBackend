const { createRouter } = require('../../Routes/createRoutes')
const { Banner } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { uploadImage } = require('../Helper')
const fs = require('fs')
const handler = async (req, res) => {
    try {
        const { image } = req?.files
            const ImageUpload = await uploadImage(image, "upload/banner/")
            if (ImageUpload) {
                await Banner.create({ image: ImageUpload })
            }
            return res.json(success("Banner Createed"))
    } catch (e) {
        return res.json(error("Please select image"))
    }
}
createRouter.post("/banner-create", TokenVerify(), wrapRequestHandler(handler));