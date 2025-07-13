import express from "express";
import { authRouter } from "./auth.js";
import { hotelRouter } from "./hotels.js";
import { userRouter } from "./user.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/hotels", hotelRouter);
apiRouter.use("/users", userRouter);

export { apiRouter as router };
