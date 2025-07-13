import type { Hotel } from "./hotel";

export type Booking = {
  _id: string;
  user: string;
  hotel: Hotel;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: "active" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
};
