const user = require("../model/User.module")

const getUser=async (req,res)=>{
  let data= await user.find()
  console.log("hello hasti");
  
  res.send(data)
}

const postUser=async (req,res)=>{
  let data=await user.create(req.body)
  res.send(data)
}

module.exports={getUser,postUser}