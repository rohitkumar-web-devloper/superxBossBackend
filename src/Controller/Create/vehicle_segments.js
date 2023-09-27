const { createRouter } = require("../../Routes/createRoutes");
const { Vehicle_segments } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { body } = require("express-validator");
const { validate } = require("../../helper/validation");
const { success, wrapRequestHandler, error } = require("../../helper/response");
const { Created_Vehicle}= require('../../Middleware/PermissionCheck')
const handler = async (req, res) => {
  const { name, description, brand_id } = req.body;
  try {
    const exist = await Vehicle_segments.findOne({
      where: {
        name: name,
      },
    });
    if (!exist) {
      const vehicleSegments = await Vehicle_segments.create({
        name,
        description,
        brand_id,
        icon: "default-image.jpg",
        status: true,
        user_id: req.login_token?.id,
      });
      return res.json(success("Vehicle Created", vehicleSegments));
    } else {
      return res.json(error("Vehicle Already Exist"));
    }
  } catch (e) {
    return res.json(error("Enter Valid Details"));
  }
};
createRouter.post(
  "/vehicle-segments",
  TokenVerify(),
  Created_Vehicle,
  validate([body("name").notEmpty().withMessage("Name field is required")]),
  wrapRequestHandler(handler)
);
