const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Categories, User } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {

    // try {
    //     const deepCat = async (parentId = null) => {
    //       const categories = await Categories.findAll({
    //         attributes: ["id", "name"],
    //         where: {
    //           parent: parentId,
    //         },
    //       });

    //       const categoryData = [];

    //       for (const category of categories) {
    //         const subCategories = await deepCat(category.id);
    //         const categoryObject = {
    //           id: category.id,
    //           label: category.name,
    //         };

    //         if (subCategories.length > 0) {
    //           categoryObject.children = subCategories;
    //         }

    //         categoryData.push(categoryObject);
    //       }

    //       return categoryData;
    //     };

    //     const nestedData = await deepCat(null);
    //     res.json(success("Category Retrieve", nestedData));
    //   } catch (e) {
    //     res.json(error("Category Retrieve Error", e));
    //   }

    try {
        const deepCat = async (parentId = null) => {
            const categories = await Categories.findAll({
                attributes: ["id", "name"],
                where: {
                    parent: parentId,
                },
            });

            return await Promise.all(categories.map(async (category) => {
                const subCategories = await deepCat(category.id);
                return {
                    id: category.id,
                    label: category.name,
                    ...(subCategories.length > 0 && { children: subCategories }),
                };
            }));
        };
        const nestedData = await deepCat(null);
        res.json(success(" Deep Category Retrieve", nestedData));
    } catch (e) {
        res.json(error(" Deep Category Retrieve Error", e));
    }
}
retrieveRouter.get('/deep-category-retrieve', TokenVerify(), wrapRequestHandler(handler))
