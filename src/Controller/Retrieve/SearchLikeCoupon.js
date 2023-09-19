const { retrieveRouter } = require("../../Routes/retrieveRouter");
const { Coupon } = require("../../models");
const TokenVerify = require("../../Middleware/TokenVerify");
const { success, wrapRequestHandler, error } = require("../../helper/response");
const { Op } = require("sequelize");
const handler = async (req, res) => {
    try {
        console.log(req.query);
        const { status, code } = req?.query?.value;
        const where = status ?
            {
                status: +status
            } : code ? {
                [Op.or]: {
                    code: { [Op.like]: "%" + code + "%" },
                },
            } : null

        const result = await Coupon.findAll({
            where,

        })
        return res.json(success("like product retrieve", { rows: result }));
    } catch (e) {
        return res.json(error("Error occur when state retrieve", e));
    }
};
retrieveRouter.get(
    "/search-like-coupon-panel",
    TokenVerify(),
    wrapRequestHandler(handler)
);
