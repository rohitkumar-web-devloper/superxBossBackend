const {Customers} = require("../models")
const jwt = require('jsonwebtoken');
const {error} = require("../helper/response")

const AppTokenVerify = () => async (req, res, next) => {
    // console.log("jkllkjljljljl")
    const errorMessage = "Invalid Token Or Token expired or Unauthorized";
    const code = 401;
    let token_id = req.headers.authorization || req.query?.token_id || "";
    token_id = await token_id.replace("Bearer ", "");
    if (!token_id) return res.status(401).send(error(errorMessage));
    try {
        const user = await jwt.verify(token_id, process.env.APP_TOKEN_KEY);
    } catch (e) {
        return res.status(401).send(error(errorMessage))
    }

    const token = await Customers.findOne({
        where: {
            token: token_id
        },

    });
    if (!token) {
        return res.status(401).send(error(errorMessage, code));
    }
    req.login_token = token;
    next();
};

module.exports = AppTokenVerify













// const {Customers} = require("../models")
// const jwt = require('jsonwebtoken');
// const AppTokenVarify = async (req, res, next) => {
//     const secretKey = "secretKey";
//     const bearerHeader = req.headers['authorization'];
//     console.log(bearerHeader, 'ddddddddddddd')
//     if (typeof bearerHeader !== "undefined") {
//
//         const data = await Customers.findOne({
//             where: {
//                 token: bearerHeader
//             }
//         })
//         if (data) {
//             jwt.verify(bearerHeader, secretKey, function (err, decoded) {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     req.user_id = decoded.data.id
//                     next()
//                 }
//             });
//         } else {
//             res.status(503).json({message: 'Authorization Failed a'})
//         }
//     } else {
//         res.status(503).json({message: 'Authorization Failed a'})
//     }
// }
// module.exports = AppTokenVarify
