const moment = require("moment");
const cron = require('node-cron');
const { Coupon } = require("./models");

const cronCoupon = async () => {
    cron.schedule("* 12 * * *", async () => {
        let currentDate = new Date();
        currentDate = moment(currentDate, "YYYY-MM-DD")
        const retrieveCoupon = await Coupon.findAll({
            attributes: ["id", "end_date", "status"],
        });
        for (const item of retrieveCoupon) {
            const dateStr = item.end_date;
            const endDate = moment(dateStr, "YYYY-MM-DD")
            if (endDate.isBefore(currentDate)) {
                console.log("Coupon has expired. Setting status to false.");
                await Coupon.update({ status: false }, {
                    where: {
                        id: item.id,
                    }
                });
            }
        }
    });
};

module.exports = {
    cronCoupon
};