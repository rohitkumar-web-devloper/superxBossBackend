const {User} = require("../models")
const jwt = require('jsonwebtoken');
const {error} = require("../helper/response")

const TokenVerify = () => async (req, res, next) => {
    const errorMessage = "Invalid Token Or Token expired or Unauthorized";
    const code = 401;
    let token_id = req.headers.authorization || req.query?.token_id || "";
    token_id =  token_id.replace("Bearer ", "");
    if (!token_id) return res.status(401).send(error(errorMessage));
    try { 
        const user = await jwt.verify(token_id, process.env.APP_TOKEN_KEY);
    } catch (e) {
        return res.status(401).send(error(errorMessage))
    }   

    const token = await User.findOne({
        where: {
            token: token_id
        },
        // include: [
        //     {
        //         model: User,
        //         as: "user",
        //     },
        // ],
    });
    if (!token) {
        return res.status(401).send(error(errorMessage, code));
    }
    req.login_token = token;
    next();
};

// const TokenVerify = async (req, res, next) => {
//     const secretKey = "secretKey";
//     const bearerHeader = req.headers['authorization'];
//     if (typeof bearerHeader !== "undefined") {
//
//         const data = await User.findOne({
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
//             res.status(503).json({message: 'Authorization Failed '})
//         }
//     } else {
//         res.status(503).json({message: 'Authorization Failed a'})
//     }
// }
module.exports = TokenVerify
