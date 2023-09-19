const { retrieveRouter } = require("../../Routes/retrieveRouter");
const { User, Customers } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { success, wrapRequestHandler, error } = require("../../helper/response");
const { Op } = require("sequelize");
const handler = async (req, res) => {
    try {
        console.log(req.query);
        const { name, state, status, mobile } = req?.query?.value;
        const page = req.query.page;
        const limit = req.query.limit;
        const startIndex = (page - 1) * limit;
        const endIndex = +limit;
        const where = name ?
            {
                [Op.or]: {
                    first_name: { [Op.like]: "%" + name + "%" },
                    last_name: { [Op.like]: "%" + name + "%" },
                },
            }
            : state ? {
                state: { [Op.like]: "%" + state + "%" },
            } : mobile ? {
                mobile: { [Op.like]: "%" + mobile + "%" },
            } : status ? {
                status: +status
            } : null

        const result = await Customers.findAll({
            where,
            offset: startIndex,
            limit: endIndex,
        })
        return res.json(success("like product retrieve", { rows: result }));
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e));
    }
};
retrieveRouter.get(
    "/search-like-customer-panel",
    TokenVerify(),
    wrapRequestHandler(handler)
);
