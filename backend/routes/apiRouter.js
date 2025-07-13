import express from "express";
import { authRouter } from "./auth.js";
import { hotelRouter } from "./hotels.js";
import { userRouter } from "./user.js";
import { bookingRouter } from "./booking.js";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/hotels", hotelRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/bookings", bookingRouter);

export { apiRouter as router };
