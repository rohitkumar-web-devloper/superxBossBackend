const { createRouter } = require('../../Routes/createRoutes')
const { Products, ProductImage, ProductBulkDiscount, Segment_type } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { uploadImage } = require('../Helper')
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Create_Product } = require("../../Middleware/PermissionCheck")
const handler = async (req, res) => {
    try {
        const Images = req.files?.new_image
        const bulkOffer = JSON.parse(req.body.bulkData)
        const { deleted_image, product_id, name, price, b2b_price, any_discount, brand_id, item_stock, sku_id, weight, tax_rate, hsn_code, ship_days, return_days, return_policy, point, part_no, segment, min_qty, unit } = req?.body
        const updateProductData = { name, price: +price, b2b_price: +b2b_price, any_discount: +any_discount, brand_id: +brand_id, item_stock: +item_stock, sku_id, weight, tax_rate: +tax_rate, hsn_code, ship_days: +ship_days, return_days: +return_days, return_policy, point: +point, min_qty: +min_qty, part_no, unit }
        const segmentArray = JSON.parse(segment)
        const exist = await Products.findOne({
            where: {
                name: name
            }
        })
        if (!exist) {
            const product = await Products.create({ ...updateProductData, trend_part: false, user_id: req.login_token.id, })
            if (product) {
                if (Images) {
                    if (req.files.new_image.length == undefined) {
                        const ImageUpload = await uploadImage(Images, "upload/products/")
                        const setImage = await ProductImage.create({ product_id: product.id, product_image: ImageUpload })
                    } else {
                        for (const key in Images) {
                            const ImageUpload = await uploadImage(Images[key], "upload/products/")
                            const setImage = await ProductImage.create({ product_id: product.id, product_image: ImageUpload })
                        }
                    }
                }
                bulkOffer.map(async item => {
                    const bulk = await ProductBulkDiscount.create({ product_id: product.id, item_count: +item.item_count, bulk_discount: +item.bulk_discount })
                })
                segmentArray.map(async item => {
                    Segment_type.create({ product_id: product.id, segment_type: item })
                })
            }
            res.json(success("Product Created Successfully"))
        } else {
            res.status(400).json(error("Product Already exist "))
        }
    } catch (e) {
        res.status(400).json(error("Product Add Error ", e))
    }

}
createRouter.post("/create-product", TokenVerify(), Create_Product, validate([
    body("name").notEmpty().withMessage("Name is requried"),
    body("part_no").notEmpty().withMessage("Part Number is requried"),
    body("price").notEmpty().withMessage("Price is requried"),
    body("b2b_price").notEmpty().withMessage("B2b_price is requried"),
    body("brand_id").notEmpty().withMessage("Brand is required"),
    body("segment").notEmpty().withMessage("Segment Type is requried"),
    body("item_stock").notEmpty().withMessage("Item stock is requried"),
    body("weight").notEmpty().withMessage("Product Unit is requried"),
    body("unit").notEmpty().withMessage("Unit is requried"),
    body("tax_rate").notEmpty().withMessage("Tax is requried"),
    body("hsn_code").notEmpty().withMessage("Hsn code is requried"),
]), wrapRequestHandler(handler));
