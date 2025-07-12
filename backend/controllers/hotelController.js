import { fetchAllHotels, addNewHotel } from "../services/hotelService.js";

export const getAllHotels = async (req, res) => {
  const result = await fetchAllHotels(req, res);
  return result;
};

export const createHotel = async (req, res) => {
  const result = await addNewHotel(req, res);
  return result;
};
