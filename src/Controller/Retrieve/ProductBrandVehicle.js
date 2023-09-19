const { retrieveRouter } = require("../../Routes/retrieveRouter");
const { Brand, VehicleParts, Vehicle_segments } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { success, wrapRequestHandler, error } = require("../../helper/response");
const handler = async (req, res) => {
  try {
    const { product_id } = req.query;
    const data = await VehicleParts.findOne({
      attributes: ["vehicle_brand_id"],
      where: {
        product_id: +product_id,
      },
    });
    const ValidBrand = JSON.parse(data.vehicle_brand_id);

    let result = [];
    for (const item of ValidBrand) {
      const brandName = await Brand.findOne({
        attributes: ["id", "name"],
        where: {
          id: item,
        },
      });
      const data = await Vehicle_segments.findAll({
        attributes: ["id", "name"],
        where: {
          brand_id: item,
          status: true,
        },
      });
      Object.assign(item, data);
      result.push({ ...JSON.parse(JSON.stringify(item)), data, brandName });
    }

    res.json(success("Retrieve Vehicle", result));
  } catch (e) {
    res.json(error("Retrieve Vehicle Error", e));
  }
};
retrieveRouter.get("/product-brand-vehicle", wrapRequestHandler(handler));
