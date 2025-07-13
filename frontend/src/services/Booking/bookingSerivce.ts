import api from "../../constants/api";

export const getBookingsByUser = async (userId: string) => {
  const response = await api.get(`/bookings/${userId}`);
  return response.data;
};
