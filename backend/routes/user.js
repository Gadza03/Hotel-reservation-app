import { Router } from "express";
import { getWishlist, toggleWishlist } from "../services/userService.js";

const router = Router();

router.post("/wishlist", toggleWishlist);
router.get("/wishlist/:id", getWishlist);

export { router as userRouter };
