const  express = require('express');
const app = express();
const multer = require('multer');
app.use(express.json());
const storage = multer({storage: multer.memoryStorage()});
app.post('/create-post',(req,res)=>{
    console.log(req.body);
    res.send("Post created successfully");
})

module.exports = app;