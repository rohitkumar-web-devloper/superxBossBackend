const { createRouter } = require("../../Routes/createRoutes");
const { Brand, UserPermissions, Permission } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { body } = require("express-validator");
const { validate } = require("../../helper/validation");
const { success, wrapRequestHandler, error } = require("../../helper/response");
const { Created_Brand } = require('../../Middleware/PermissionCheck')


const handler = async (req, res) => {
  const { name, description, type, brand_day_offer } = req.body;
  try {
    const exist = await Brand.findOne({
      where: {
        name: name,
      },
    });
    if (!exist) {
      const category = await Brand.create({
        name,
        description,
        type,
        logo: "default-image.jpg",
        status: true,
        brand_day: false,
        brand_day_offer,
        user_id: req.login_token?.id,
      });
      return res.json(success("Brand Created"));
    } else {
      return res.json(error("Brand is Already Exist"));
    }
  } catch (e) {
    return res.json(error("Enter Valid Details", e));
  }
};
createRouter.post("/create-brand", TokenVerify(), Created_Brand, validate([
  body("name").notEmpty().withMessage("Name field is required"),
  body("type").notEmpty().withMessage("Type field is required"),
]),
  wrapRequestHandler(handler)
);
