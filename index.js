const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()


app.get("/" , (req,res)=>{
    res.json({message:"OK"})
})

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})