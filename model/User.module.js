const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
  username:{type:String},
  password:Number
})

const user=mongoose.model("user",userSchema)

module.exports=user