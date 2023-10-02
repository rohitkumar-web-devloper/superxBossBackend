const { createRouter } = require('../../Routes/createRoutes')
const { Customers, sequelize } = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const { body } = require('express-validator');
const { validate } = require("../../helper/validation")
const { success, wrapRequestHandler, error } = require("../../helper/response")
const { Create_Faq } = require('../../Middleware/PermissionCheck');
const axios = require('axios');
const handler = async (req, res) => {
    try {
        const data = JSON.parse(req.body.id)
        const user = await Customers.findAll({
            attributes: ["fcm_token"],
            where: {
                id: data
            },
            raw: true
        })
        const hello = user.map((item) => item.fcm_token)
        console.log(hello)

        try {
            let ro = JSON.stringify({
                "registration_ids": hello,
                "notification": {
                    "title": "97vgfdrr",
                    "body": "body",
                    "image": "https://img.freepik.com/free-icon/important-person_318-10744.jpg"
                },
                "priority": "high",
                "data": {}
            });
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://fcm.googleapis.com/fcm/send',
                headers: {
                    'Authorization': 'Bearer AAAAixrKIqY:APA91bEr3W0LN_jaceTscWaQ1LqFgmulRnuOBV5GUDxmh-mSb_W2Wm_iofNl6jlm5qtfFCWfZ_GmQ_w7IyexbQjK2Uu-TTME9KstUjDp22BrQBkLZHd3KmgYXZSru0MXVgKBGJzWdSf0',
                    'Content-Type': 'application/json'
                },
                data: ro
            };
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                }).catch((error) => {
                    console.log(error, "kkkkkkkkkkkkkkkkk")
                })
            // const data = await fetch('https://fcm.googleapis.com/fcm/send', { method: "post", headers: { "Authrization": "Bearer AAAAixrKIqY:APA91bEr3W0LN_jaceTscWaQ1LqFgmulRnuOBV5GUDxmh-mSb_W2Wm_iofNl6jlm5qtfFCWfZ_GmQ_w7IyexbQjK2Uu-TTME9KstUjDp22BrQBkLZHd3KmgYXZSru0MXVgKBGJzWdSf0" }, body: { to: hello, notification: { title: req.body.title, body: req.body.description }, priority: "high" } })
            // console.log(data)
            return res.json(success("Yo"))
        } catch (error) {
            res.json(error(error))
        }
    } catch (error) {

    }

}
createRouter.post("/notification", TokenVerify(), wrapRequestHandler(handler));
