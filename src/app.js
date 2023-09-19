const express = require("express");
const app = express();
const cors = require('cors')
const fileUpload = require('express-fileupload')
app.use(cors(
    {
        origin:[
            "https://super-x-boss.technosters.co.in",
            "http://localhost:3000",
            "http://localhost:3001"
        ]
    }
))
app.use(fileUpload({
    tempFileDir : 'assets',

}))
app.use(express.json());
app.use(express.static('assets'))
// app.use(express.urlencoded({ extend : false}))

module.exports = {
    app
}