const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { CategoryProduct, Products, Brand, ProductImage, ProductBulkDiscount } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const handler = async (req, res) => {
    try {
        console.log(req.query)
        const data = await CategoryProduct.findAll({
            where: {
                // category_id: +req.query.catId
                category_id: 10
            },
            include: [
                {
                    model: Products,
                    as: "productData",
                    include: [
                        {
                            attributes: ["name", "id"],
                            model: Brand,
                            as: "brand"
                        },
                        {
                            attributes: ["product_image"],
                            model: ProductImage,
                            as: "productImage"
                        },
                        {
                            attributes: ["item_count", "bulk_discount", "id"],
                            model: ProductBulkDiscount,
                            as: "bulkDiscount"
                        },
                        // {
                        //     attributes: ["name"],
                        //     model: VehicleSegmentType,
                        //     as: "segment"
                        // }
                    ]
                },

            ]
        })
        res.json(success("Catrgory Product", data))
    } catch (err) {
        res.json(error("Banner Retrieve Error", err))
    }
}
retrieveRouter.get('/category-product-retrieve', wrapRequestHandler(handler))
