const { updateRouter } = require('../../Routes/updateRoutes')
const { Products } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Update_Product } = require("../../Middleware/PermissionCheck")
const handler = async (req, res) => {
    try {
        const { id, new_arrival, trend_part, pop_item } = req?.body
        let updateField, successMessage;
        if (typeof trend_part === 'boolean') {
            updateField = 'trend_part';
            successMessage = 'Trend update';
        } else if (typeof new_arrival === 'boolean') {
            updateField = 'new_arrival';
            successMessage = 'Arrival update';
        } else if (typeof pop_item === 'boolean') {
            updateField = 'pop_item';
            successMessage = 'Popular Item update';
        }
        if (updateField) {
            await Products.update({ [updateField]: !req.body[updateField] }, { where: { id } });
            res.json(success(successMessage));
        }

    } catch (e) {
        res.json(error("featured is not update", e))
    }
}
updateRouter.put('/product-trend-status', TokenVerify(), Update_Product, wrapRequestHandler(handler))
