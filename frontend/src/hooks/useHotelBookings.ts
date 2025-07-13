import { useEffect, useState } from "react";
import { getHotelActiveBookings } from "../services/Booking/bookingSerivce";

export const useHotelBookings = (hotelId: string) => {
  const [bookedRanges, setBookedRanges] = useState<
    { start: Date; end: Date }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const bookings = await getHotelActiveBookings(hotelId);
      const ranges = bookings.map((b: any) => ({
        start: new Date(b.startDate),
        end: new Date(b.endDate),
      }));
      setBookedRanges(ranges);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [hotelId]);

  return { bookedRanges, loading, refetch: fetchBookings };
};
