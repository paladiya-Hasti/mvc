const { log } = require('console')
const mongoose=require('mongoose')

const dbconnect=async()=>{
  await mongoose.connect("mongodb+srv://hastipaladiya2001:Hasti$2001@cluster0.lbbbv.mongodb.net/")
  console.log("connected to the db");
  
}
module.exports=dbconnect;