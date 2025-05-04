import express from "express";
import userRouter from "./routes/user.route.js";
import connetDB from "./utils/connectDB.js";

const app = express();

app.use("/users", userRouter);

app.listen(3000, () => {
  connetDB();
  console.log("listening on port 3000");
});
