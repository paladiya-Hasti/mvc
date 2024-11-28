const { log } = require('console')
const   mongoose  = require("mongoose")

const dbconection=async()=>{
  await mongoose.connect("mongodb+srv://hastipaladiya2001:Hasti$2001@cluster0.lbbbv.mongodb.net/")
console.log("mongoose connection");
}

module.exports=dbconection;