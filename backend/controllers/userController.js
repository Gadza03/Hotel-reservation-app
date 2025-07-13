import { getWishlist, toggleWishlist } from "../services/index.js";

export const updateWishList = async (req, res) => {
  const result = await toggleWishlist(req, res);
  return result;
};

export const getWishListItems = async (req, res) => {
  const result = await getWishlist(req, res);
  return result;
};
