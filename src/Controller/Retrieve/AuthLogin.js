const { where } = require('sequelize')
const { retrieveRouter } = require('../../Routes/retrieveRouter')
const { User, Otp } = require("../../models")
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { success, wrapRequestHandler, error } = require("../../helper/response")
retrieveRouter.post('/authLogin', async (req, res) => {
    const secretKey = "secretKey";
    const { name, password } = req.body

    const exist = await User.findOne({
        where: {
            name,
        }
    })
    if (exist) {
        const a = bcrypt.compareSync(password, exist.password)
        if (a) {
            let userToken = jwt.sign({
                data: {
                    id: exist.id,
                    name: exist.name
                }
            }, secretKey);
            // }, secretKey, {expiresIn: 100*100});

            const data = await User.update({ token: userToken }, {
                where: {
                    id: exist.id
                }
            })
            if (data) {
                res.status(200).json({
                    isSuccess: true,
                    message: "User Login Success",
                    token: userToken,
                    user: {
                        id: exist.role,
                        name: exist.name,
                        image: exist.profile_picture,
                    }
                })
            }
        } else {
            res.status(400).json(error("Enter Valid Credentials"))
        }
    }
    else {
        res.status(400).json(error("Enter Valid Credentials"))
    }

})
