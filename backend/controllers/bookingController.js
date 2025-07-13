import { getBookingsByUserId } from "../services/index.js";

export const getBookingsByUser = async (req, res) => {
  const result = await getBookingsByUserId(req, res);
  return result;
};
