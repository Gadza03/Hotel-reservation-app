import {
  fetchAllHotels,
  addNewHotel,
  fetchHotelById,
} from "../services/hotelService.js";

export const getAllHotels = async (req, res) => {
  const result = await fetchAllHotels(req, res);
  return result;
};

export const getHotelById = async (req, res) => {
  const { id } = req.params;
  const result = await fetchHotelById(res, id);
  return result;
};

export const createHotel = async (req, res) => {
  const result = await addNewHotel(req, res);
  return result;
};
