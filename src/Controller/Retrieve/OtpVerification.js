const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { Customers, Otp } = require("../../models")
var jwt = require('jsonwebtoken')
const { success, wrapRequestHandler, error } = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const { mobile, otp, newFcmToken } = req.query
        if (otp.length == 4) {
            const userInfo = await Customers.findOne({
                where: { mobile: mobile }, include: [{
                    model: Otp,
                    as: "otpData"
                }]
            })
            const otpValue = userInfo.otpData.otp_number
            const LoginUserId = userInfo.otpData.user_id
            if (otpValue == otp) {
                let userToken = jwt.sign({
                    data: {
                        id: LoginUserId
                    }
                }, process.env.APP_TOKEN_KEY);
                const showResult = await Customers.update({ token: userToken, fcm_token: newFcmToken }, {
                    where: {
                        id: LoginUserId
                    }
                })
                if (showResult) {
                    const userData = await Customers.findOne({
                        where: { mobile: mobile }
                    })
                    res.json(success(("otp Verified", userData)))
                }
            } else {
                res.json(error(("Enter Valid Otp")))
            }
        } else {
            res.json(error('Enter Valid Otp'))
        }
    } catch (err) {
        res.json(error('Otp Check error', err))
    }
}

retrieveRouter.get('/otp-verification', wrapRequestHandler(handler))