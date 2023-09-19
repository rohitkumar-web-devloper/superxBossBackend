const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Products, Brand, ProductImage, VehicleParts, VehicleYears, PruductCategory } = require("../../models")
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Op } = require("sequelize");
const handler = async (req, res) => {
    let result;
    let ProductData = [];
    try {
        const { model, brand, year, category } = req.query
        if (model != "undefined" && brand != "undefined" && year != "undefined") {
            const data = await VehicleYears.findAll({
                attributes: ["product_id"],
                where: {
                    product_brand_id: +brand,
                    vehicle_id: +model,
                    vehicle_year: +year
                }
            })
            await Promise.all(data.map(async (item) => {
                const hero = await Products.findOne({
                    where: {
                        id: item.product_id
                    },
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
                        }
                    ]
                });
                ProductData.push(hero);
            }))
            result = ProductData
        } else if (category != "undefined") {
            const data = await PruductCategory.findAll({
                attributes: ["product_id"],
                where: {
                    category_id: +category
                }
            })
            await Promise.all(data.map(async (item) => {
                const hero = await Products.findOne({
                    where: {
                        id: item.product_id
                    },
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
                        }
                    ]
                });
                ProductData.push(hero);
            }))
            result = ProductData
        } else if (model != "undefined" && brand != "undefined") {
            const data = await VehicleParts.findAll({
                where: {
                    product_brand_id: +brand,
                },
            })

            await Promise.all(data.map(async (item) => {
                const rohit = JSON.parse(item.vehicle_id);
                await Promise.all(rohit.map(async (row) => {
                    if (row === +model) {
                        const hero = await Products.findOne({
                            where: {
                                id: item.product_id
                            },
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
                                }
                            ]
                        });
                        ProductData.push(hero);
                    }
                }));
            }));
            result = ProductData
        } else if (brand != "undefined") {
            result = await Products.findAll({
                where: {
                    brand_id: +brand
                },
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
                    }
                ]
            })
        }
        return res.json(success("like product retrieve", result))
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e.message))
    }
}
retrieveRouter.get('/filter-product-data-app', AppTokenVarify(), wrapRequestHandler(handler))
// if (model != "undefined" && brand != "undefined" && year != "undefined" && category != "undefined") {
//     console.log("4")
// } else