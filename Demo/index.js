const { log } = require('console');
const express=require('express');
const dbconnect = require('./db');
const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("Welcome node!")
})




app.listen(4004,()=>{
  console.log("listening on port 4004");
  dbconnect();
  
})