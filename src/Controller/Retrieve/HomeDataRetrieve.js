const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Categories, Products, Brand, ProductImage, Customers, VehicleSegmentType, Rating ,Coupon ,Banner} = require("../../models")
const AppTokenVerify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {

        const categories = await Categories.findAll({
            where: {
                parent: null
            },
        })
        const product = await Products.findAll({
            where: {
                trend_part: true
            },
            include: [
                {
                    attributes: ["name"],
                    model: Brand,
                    as: "brand"
                },
                {
                    attributes: ["product_image"],
                    model: ProductImage,
                    as: "productImage"
                }
            ]
        })
        const brand = await Brand.findAll({
            attributes: ['id', "name", "logo"],
            where: {
                type: ["Spare Parts" ,"vehicle + Spare Part"],
                status: true
                
            },

        })
        const newArrival = await Products.findAll({
            where: {
                new_arrival: true
            },
            include: [
                {
                    attributes: ["name"],
                    model: Brand,
                    as: "brand"
                },
                {
                    attributes: ["product_image"],
                    model: ProductImage,
                    as: "productImage"
                }
            ]
        })
        const vehicleBrand = await Brand.findAll({
            attributes: ['id', "name", "logo"],
            where: {
                type: "Vehicle"
            },
        })
        const popItemProduct = await Products.findAll({
            where: {
                pop_item: true
            },
            include: [
                {
                    attributes: ["name"],
                    model: Brand,
                    as: "brand"
                },
                {
                    attributes: ["product_image"],
                    model: ProductImage,
                    as: "productImage"
                }
            ],
        })
        const userPoint = await Customers.findOne({
            attributes: ['point'],
            where: {
                id: req.login_token.id
            }
        })
        const rating = await Rating.findAll({
            attributes: ['year' , "category" , "user","rating"],
        })
        const coupon = await Coupon.findAll({
            where:{
                status: true
            }
        })
        const banner = await Banner.findAll({
            attributes:["id" , "image"]
        })
        res.json(success("Trending Parts Retrieve", { categories: categories, trendingProduct: product, spareBrand: brand, newArrival: newArrival, vehicleBrand: vehicleBrand, popItemProduct: popItemProduct, userPoint: userPoint, rating: rating , coupon :coupon ,banner:banner}))

    } catch (err) {
        res.status(400).json(error("Category Retrieve Error", err))
    }
}
retrieveRouter.get('/home-page-data', AppTokenVerify(), wrapRequestHandler(handler))
