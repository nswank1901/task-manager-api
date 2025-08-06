import express from "express";
import "./db/mongoose.js";
import userRouter from "./routers/user.js";
import taskRouter from "./routers/task.js";

const app = express();

app.use(express.json()); // parse incoming JSON requests, attach parsed data to req.body
app.use(userRouter);
app.use(taskRouter);

export default app;
