const { updateRouter } = require('../../Routes/updateRoutes')
const { Customers } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { uploadImage } = require('../Helper')
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const base64Img = require('base64-img');
const fs = require('fs')
const handler = async (req, res) => {
    try {
        const { image } = req.body
        base64Img.img(image, 'assets/upload/customer/', Date.now(), async function (err, filepath) {
            const imgUrl = filepath.slice(23, filepath.lenght)
            if (imgUrl) {
                const result_1 = await Customers.findOne({
                    attributes: ["profile_picture"],
                    where: {
                        id: req.login_token.id
                    }
                })

                if (result_1.profile_picture !== "default-image.jpg") {
                    fs.unlink(`assets/upload/customer/${result_1.profile_picture}`, (err) => {
                        if (err) {
                            console.log("customer Image is not deleted ", err)
                            return;
                        } else {
                            console.log("File Deleted Successfully")
                        }
                    })
                }

                const update = await Customers.update({ profile_picture: imgUrl }, {
                    where: {
                        id: req.login_token.id
                    }
                })

                if (update) {
                    const result = await Customers.findOne({
                        attributes: ["first_name", "last_name", "mobile", "profile_picture", "email"],
                        where: {
                            id: req.login_token.id
                        }
                    })
                    return res.json(success("Profile Image upload", result))
                }
            }
        })
    } catch (e) {
        res.status(400).json(error("Please Select Image"))
    }


}
updateRouter.put('/customer-image-update', AppTokenVarify(), wrapRequestHandler(handler))
