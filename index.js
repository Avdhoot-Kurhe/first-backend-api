const express=require("express");
const app = express();
require("dotenv").config();

const port=process.env.port||8000;

app.get('/', (req,res)=>{
    res.sendFile("Hello User", "this is application api")
});

app.listen(port,()=>{
    console.log(`Server Run On ${port}`)
})
