const { updateRouter } = require('../../Routes/updateRoutes')
const { Products, ProductImage, ProductBulkDiscount } = require("../../models")
const { body } = require('express-validator')
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler } = require("../../helper/response")
const { validate } = require("../../helper/validation")
const { uploadImage } = require('../Helper')
const fs = require('fs')
const { Update_Product } = require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
    try {
        const { deleted_image, product_id, name, price, b2b_price, any_discount, brand_id, item_stock, sku_id, weight, tax_rate, hsn_code, ship_days, return_days, return_policy, point, part_no, segment_type, min_qty, unit, bulkData } = req?.body
        const updateProductData = { name, price: +price, b2b_price: +b2b_price, any_discount: +any_discount, brand_id: +brand_id, item_stock: +item_stock, sku_id, weight, tax_rate: +tax_rate, hsn_code, ship_days: +ship_days, return_days: +return_days, return_policy, point: +point, min_qty: +min_qty, part_no, segment_type: +segment_type, unit }
        const NewImage = req.files?.new_image
        const bulk = JSON.parse(bulkData)
        if (typeof (deleted_image) == 'string') {
            fs.unlink(`assets/upload/products/${deleted_image}`, (err) => {
                if (err) {
                    console.log("Product Image is not deleted ", err)
                    return;
                } else {
                    console.log("Product Image Deleted Successfully")
                }
            })
            const image_Delete = await ProductImage.destroy({
                where: {
                    product_id: product_id,
                    product_image: deleted_image
                }
            })
        }
        else if (typeof (deleted_image) == "object") {
            deleted_image?.map(async (item, index) => {
                fs.unlink(`assets/upload/products/${deleted_image[index]}`, (err) => {
                    if (err) {
                        console.log("Product Image is not deleted ", err)
                        return;
                    } else {
                        console.log("Product Image Deleted Successfully")
                    }
                })
                const image_Delete = await ProductImage.destroy({
                    where: {
                        product_id: product_id,
                        product_image: deleted_image[index]
                    }
                })
            })
        }
        const product = await Products.update(updateProductData, {
            where: {
                id: +product_id
            }
        })
        if (bulk.length != 0) {
            await ProductBulkDiscount.destroy({
                where: {
                    product_id
                }
            })
            await ProductBulkDiscount.bulkCreate(bulk)
        }
        if (NewImage) {
            if (req.files.new_image.length == undefined) {
                const ImageUpload = await uploadImage(NewImage, "upload/products/")
                const setImage = await ProductImage.create({ product_id: product_id, product_image: ImageUpload })
            } else {
                for (const key in NewImage) {
                    const ImageUpload = await uploadImage(NewImage[key], "upload/products/")
                    const setImage = await ProductImage.create({ product_id: product_id, product_image: ImageUpload })
                }
            }
        }
        res.json(success(("Product update")))
    } catch (e) {
        res.status(400).json(error("Product update Error ", e))
    }
}
updateRouter.put('/edit-product', TokenVerify(), Update_Product, validate([
    body("name").notEmpty().withMessage("Name is require"),
]), wrapRequestHandler(handler))
