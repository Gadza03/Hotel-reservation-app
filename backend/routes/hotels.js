import { Router } from "express";
import { createHotel, getAllHotels } from "../controllers/hotelController.js";
const router = Router();

router.get("/", getAllHotels);
router.post("/", createHotel);

export { router as hotelRouter };
