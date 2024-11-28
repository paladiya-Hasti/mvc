const express = require("express");
const dbconection = require("./config/db");
const userRouter = require("./routes/User.router");
const app = express();

app.use(express.json());
app.use("/users", userRouter);

app.listen(8090, () => {
  console.log("listening on port http://localhost:8090");
  dbconection()
});


