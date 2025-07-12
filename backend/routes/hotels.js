import { Router } from "express";
import { createHotel, getAllHotels } from "../controllers/hotel.js";
const router = Router();

router.get("/", getAllHotels);
router.post("/", createHotel);

export default router;
