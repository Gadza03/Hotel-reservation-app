import api from "../../constants/api";
import type { CreateBooking } from "../../types/createBooking";

export const getBookingsByUser = async (userId: string) => {
  const response = await api.get(`/bookings/${userId}`);
  return response.data;
};

export const getHotelActiveBookings = async (id: string) => {
  const response = await api.get(`/bookings/hotel/${id}/active`);
  return response.data;
};

export const createBooking = async (data: CreateBooking) => {
  const response = await api.post(`/bookings`, data);
  return response.data;
};
