import express from "express";
import { authRouter } from "./auth.js";
import { hotelRouter } from "./hotels.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/hotels", hotelRouter);

export { apiRouter as router };
