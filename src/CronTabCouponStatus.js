// const moment = require("moment")
// const cron = require('node-cron')
// const { Coupon } = require("./models")
// moment
// // const { Coupon } = require("../../models")
// const cronCopupon = async () => {
//     cron.schedule("* * * * * *", async () => {
//         const rohit = new Date()
//         console.log(rohit, "ddddddddd")
//         const date = moment(rohit).format('ddd-MMM-DD-YYYY')
//         console.log(date)

//         const retrieveCoupon = await Coupon.findAll({
//             attributes: ["id", "end_date", "status"],

//         })
//         retrieveCoupon?.map(async (item, index) => {
//             const dateStr = item.end_date;
//             const formatStr = 'ddd-MMM-DD-YYYY';
//             const newDate = moment(dateStr, formatStr);

//             if (newDate.isBefore(date)) {
//                 console.log("bol papa")
//                 const data = await Coupon.update({ status: false }, {
//                     where: {
//                         id: item.id,
//                     }
//                 })
//             }
//         })
//     })
// }
// module.exports = {
//     cronCopupon
// }
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