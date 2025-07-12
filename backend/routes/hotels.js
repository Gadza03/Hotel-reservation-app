import { Router } from "express";
import {
  createHotel,
  getAllHotels,
  getHotelById,
} from "../controllers/index.js";
const router = Router();

router.get("/", getAllHotels);
router.get("/:id", getHotelById);
router.post("/", createHotel);

export { router as hotelRouter };
