import { toggleWishlist } from "../services/index.js";

export const updateWishList = async (req, res) => {
  const result = await toggleWishlist(req, res);
  return result;
};
