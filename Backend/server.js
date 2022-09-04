require('dotenv').config()
const express =require('express');


const app = express();

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

app.get('/',(req,res)=>{
    res.json({mssg:'Test Has Passed '})
})

app.listen(process.env.PORT, ()=> {
console.log("test")
})