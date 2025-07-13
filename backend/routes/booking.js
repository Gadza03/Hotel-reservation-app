import { Router } from "express";
import { getBookingsByUser } from "../controllers/index.js";

const router = Router();

router.get("/:id", getBookingsByUser);

export { router as bookingRouter };
