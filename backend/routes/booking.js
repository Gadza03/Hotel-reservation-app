import { Router } from "express";
import {
  createReservation,
  getBookingsByUser,
  getHotelActiveBookings,
} from "../controllers/index.js";

const router = Router();

router.get("/:id", getBookingsByUser);
router.get("/hotel/:id/active", getHotelActiveBookings);
router.post("/", createReservation);

export { router as bookingRouter };
