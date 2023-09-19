const { retrieveRouter } = require("../../Routes/retrieveRouter");
const { Categories ,User} = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { success, wrapRequestHandler, error } = require("../../helper/response");
const { Op } = require("sequelize");
const handler = async (req, res) => {
  try {
    console.log(req.query);
    const { name , subName  ,status , subStatus} = req?.query?.value;
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = +limit;


    const where = name ?
      {
        [Op.or]: {
          name: { [Op.like]: "%" + name + "%" },
        },
        parent : null
      }
      : subName ?
        {
            [Op.or]: {
                name: { [Op.like]: "%" + subName + "%" },
              },
              parent : +req.query.id
        } :  status ? {
            parent : null,
            status: +status
          } : subStatus ?{
            parent : +req.query.id,
            status: +subStatus
          } :null

    const result = await Categories.findAll({
      where,
      offset: startIndex,
      limit: endIndex,
      include: [
        {
            attributes: ["name"],
            model: User,
            as: "user"
        }
    ]
    })
    return res.json(success("like product retrieve", { rows: result }));
  } catch (e) {
    return res.json(error("Error occur when state retrieve", e));
  }
};
retrieveRouter.get(
  "/search-like-category-panel",
  TokenVerify(),
  wrapRequestHandler(handler)
);
