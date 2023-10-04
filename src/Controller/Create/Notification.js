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
        const { title, id, description } = req?.body
        const data = JSON.parse(req.body.id)
        const user = await Customers.findAll({
            attributes: ["fcm_token"],
            where: {
                id: data
            },
            raw: true
        })
        const fcm = user.map((item) => item.fcm_token)

        try {
            let data = JSON.stringify({
                "registration_ids": fcm,
                "notification": {
                    "title": title,
                    "body": description,
                    // "image": "https://img.freepik.com/free-icon/important-person_318-10744.jpg"
                    "image": "https://images.unsplash.com/photo-1696149640153-5fa97f9f51fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
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
                data: data
            };
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                }).catch((error) => {
                    console.log(error, "---------------------Notification.js")
                })
            return res.json(success("Notification send"))
        } catch (error) {
            res.json(error(error))
        }
        return res.json(success("sdfd"))
    } catch (error) {

    }

}
createRouter.post("/notification", TokenVerify(), wrapRequestHandler(handler));
