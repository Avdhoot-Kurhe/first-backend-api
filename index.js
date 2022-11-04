const express=require("express");
const app = express();
require("dotenv").config();

const port=process.env.port||8000;

app.get('/', (req,res)=>{
    res.sendFile("Hello User", "this is application api")
});

app.get('/about', (req,res)=>{
    res.sendFile("Wel-Come to  about page")
});
app.get('/user', (req,res)=>{
    res.sendFile("Wel-Come to  user page")
});
app.listen(port,()=>{
    console.log(`Server Run On ${port}`)
})
