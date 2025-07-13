export type CreateBooking = {
  userId: string;
  hotelId: string;
  startDate: string | Date;
  endDate: string | Date;
  totalPrice: number;
};
