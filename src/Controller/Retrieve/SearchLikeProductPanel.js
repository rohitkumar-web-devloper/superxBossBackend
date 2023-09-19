const { retrieveRouter } = require("../../Routes/retrieveRouter");
const { Products, Brand, ProductImage, ProductBulkDiscount, VehicleSegmentType } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { success, wrapRequestHandler, error } = require("../../helper/response");
const { Op } = require("sequelize");
const handler = async (req, res) => {
  try {
    const { productName, brandId, part_no, segment, trend, pop, arrival } = req?.query?.value;
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = +limit;

    const where = productName || part_no ?
      {
        [Op.or]: {
          name: { [Op.like]: "%" + productName + "%" },
          part_no: { [Op.like]: "%" + part_no + "%" },
        }
      }
      : brandId ?
        {
          brand_id: brandId,
        } : segment ? {
          segment_type: +segment
        } : trend ? {
          trend_part: +trend
        } : arrival ? {
          new_arrival: + arrival
        } : pop ? {
          pop_item: +pop
        } : null

    const result = await Products.findAll({
      where,
      offset: startIndex,
      limit: endIndex,
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
        {
          attributes: ["name"],
          model: VehicleSegmentType,
          as: "segment"
        }
      ]
    })
    return res.json(success("like product retrieve", { rows: result }));
  } catch (e) {
    return res.json(error("Error occur when state retrieve", e));
  }
};
retrieveRouter.get(
  "/search-like-product-panel",
  TokenVerify(),
  wrapRequestHandler(handler)
);
