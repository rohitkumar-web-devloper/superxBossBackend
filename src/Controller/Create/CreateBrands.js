const { createRouter } = require("../../Routes/createRoutes");
const { Brand } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { body } = require("express-validator");
const { validate } = require("../../helper/validation");
const { success, wrapRequestHandler, error } = require("../../helper/response");

const handler = async (req, res) => {
  const { name, description, type } = req.body;
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
        featured: false,
        user_id: req.login_token?.id,
      });
      return res.json(success("Brand Created"));
    }else{
        return res.json(error("Brand is Already Exist"));
    }
  } catch (e) {
    return res.json(error("Enter Valid Details", e));
  }
};
createRouter.post(
  "/create-brand",
  TokenVerify(),
  validate([
    body("name").notEmpty().withMessage("Name field is required"),
    body("type").notEmpty().withMessage("Type field is required"),
  ]),
  wrapRequestHandler(handler)
);
