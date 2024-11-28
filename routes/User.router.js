const { Router } = require("express");
const { getUser, postUser } = require("../controller/User.controller");

const userRouter=Router()
userRouter.get("/",getUser)
userRouter.post("/",postUser)

module.exports=userRouter