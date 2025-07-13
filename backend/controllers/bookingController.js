import {
  createNewReservation,
  getActiveBookingsByHotel,
  getBookingsByUserId,
} from "../services/index.js";

export const getBookingsByUser = async (req, res) => {
  const result = await getBookingsByUserId(req, res);
  return result;
};

export const getHotelActiveBookings = async (req, res) => {
  const result = await getActiveBookingsByHotel(req, res);
  return result;
};

export const createReservation = async (req, res) => {
  const result = await createNewReservation(req, res);
  return result;
};
