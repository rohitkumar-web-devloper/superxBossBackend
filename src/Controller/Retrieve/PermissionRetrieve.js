const {retrieveRouter} = require('../../Routes/retrieveRouter')
const {Permission} = require("../../models")
const TokenVerify = require("../../Middleware/TokenVerify")
const {success, wrapRequestHandler, error} = require("../../helper/response")

const handler = async (req, res) => {
    try {
        const permission = await Permission.findAll()
        const abc =[];
        await permission.map(item =>{
            if (abc.find(s=>s.heading === item.heading)){
               const a = abc.find(s=>s.heading === item.heading);
               a.permission.push({name : item?.name , id : item?.id});
            }else{
                abc.push({
                    heading : item.heading,
                    permission :[{name:item?.name , id : item?.id}]
                });
            }
        })
        res.json(success("Retrieve Permission Error", abc))

    } catch (e) {
        res.json(error("Retrieve Permission Error", err))

    }
}
retrieveRouter.get('/permission-retrieve', TokenVerify(), wrapRequestHandler(handler))
