import { Router } from "express";
import { toggleWishlist } from "../services/userService.js";

const router = Router();

router.post("/wishlist", toggleWishlist);

export { router as userRouter };
