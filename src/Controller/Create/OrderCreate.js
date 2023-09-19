const { createRouter } = require('../../Routes/createRoutes')
const { Orders, OrdersDetails, Customers } = require("../../models")
const crypto = require("crypto");
const Razorpay = require('razorpay');
const { RAZORPAY_KEY_SECRET, RAZORPAY_KEY_ID } = process.env
const AppTokenVarify = require("../../Middleware/AppTokenVarify")
const { body } = require('express-validator');
const { uploadImage } = require('../Helper')
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const razorpay = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
});
const handler = async (req, res) => {
    try {
        const { amount } = req.body;
        const order = await razorpay.orders.create({
            amount: amount * 100 ,
            currency: "INR"
        });
        return res.json(success("success", { order }));
    } catch (e) {
        return res.json(error("error", { e }));
    }
};
createRouter.post("/deposit", AppTokenVarify(), wrapRequestHandler(handler));

const verifyHandler = async (req, res) => {
    console.log(req.body)
    const { razorpay_signature, razorpay_order_id, razorpay_payment_id, proQuantity, point } = req?.body
    const { name, mobile, pin_code, street_address, city, state, type, discount, total_Amount, orderType } = req?.body.address
    // const generatedSignature = crypto
    //     .createHmac("sha256", RAZORPAY_KEY_SECRET)
    //     .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    //     .digest("hex");
    // const orderSave = await Orders.create({
    //     order_id: razorpay_order_id,
    //     name,
    //     mobile,
    //     pin_code,
    //     street_address,
    //     city,
    //     state,
    //     discount,
    //     total_amount: total_Amount,
    //     address_type: type,
    //     type: orderType,
    //     transction_id: razorpay_payment_id,
    //     user_id: req.login_token.id,
    //     status: generatedSignature === razorpay_signature ? "success" : "failed",
    // })
    // proQuantity?.map(async (item, index) => {
    //     const orderDetailsSave = await OrdersDetails.create({ order_id: razorpay_order_id, product_id: item?.id, price: item?.price, quantity: item.qty })
    // })
    // if (point) {
    //     const findCustomer = await Customers.findOne({
    //         attributes: ['point'],
    //         where: {
    //             id: req.login_token.id
    //         }
    //     })
    //     const hello = await Customers.update({ point: (findCustomer.point + point) }, {
    //         where: {
    //             id: req.login_token.id
    //         }
    //     })
    // }
    return res.json(success("hurry up!"));
};

createRouter.post("/deposit/verifyPayment", AppTokenVarify(), wrapRequestHandler(verifyHandler));