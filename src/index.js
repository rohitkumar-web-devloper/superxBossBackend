const {app} = require('./app')
const requireDir = require('require-dir')
require('dotenv').config();
const cors = require("cors")
requireDir("./Controller", {recurse: true});
requireDir("./Routes");
const {PORT} = process.env
const {cronCoupon} = require('./CronTabCouponStatus')
cronCoupon()
app.listen(PORT, (err) => {
    console.log(`Server run on port no. ${PORT}`)
})