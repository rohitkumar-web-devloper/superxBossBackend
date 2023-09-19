const { retrieveRouter } = require("../../Routes/retrieveRouter");
const { Brand } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { success, wrapRequestHandler, error } = require("../../helper/response");

const handler = async (req, res) => {
  try {
    const brand = await Brand.findAll({
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
      where: {
        type: "Vehicle",
        status: true,
      },
    });
    res.json(success("Vehicle Brands Retrieve ", brand));
  } catch (e) {
    res.status(400).json(error("Vehicle Brands Retrieve Error", e));
  }
};
retrieveRouter.get(
  "/vehicle-brand",
  TokenVerify(),
  wrapRequestHandler(handler)
);
