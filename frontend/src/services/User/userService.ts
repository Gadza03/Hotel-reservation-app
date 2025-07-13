import api from "../../constants/api";

export const updateWishList = async (userId: string, hotelId: string) => {
  const response = await api.post("/users/wishlist", {
    hotelId: hotelId,
    userId: userId,
  });
  return response.data;
};
