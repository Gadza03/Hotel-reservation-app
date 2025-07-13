import { useEffect, useState } from "react";
import c from "./booking.module.css";
import { getBookingsByUser } from "../../services/Booking/bookingSerivce";
import { useAuth } from "../../contexts/AuthContext/useAuth";
import type { Booking } from "../../types/booking";
import { BookingCard } from "../../components";

export const BookingPage = () => {
  const [upcoming, setUpcoming] = useState<Booking[]>([]);
  const [past, setPast] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?._id) return;

    const fetchBookings = async () => {
      try {
        const data = (await getBookingsByUser(user._id)) as Booking[];
        const now = new Date();

        setUpcoming(data.filter((b) => new Date(b.startDate) > now));
        setPast(data.filter((b) => new Date(b.endDate) < now));
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user?._id]);

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div className={`${c.wrapper} container`}>
      <h1>Your Bookings</h1>

      <div className={c.section}>
        <h2 className={c.sectionTitle}>Upcoming Bookings</h2>
        {upcoming.length === 0 ? (
          <p>No upcoming bookings.</p>
        ) : (
          upcoming.map((b) => (
            <BookingCard
              key={b._id}
              hotelName={b.hotel.name}
              startDate={b.startDate}
              endDate={b.endDate}
              status={b.status}
            />
          ))
        )}
      </div>

      <div className={c.section}>
        <h2 className={c.sectionTitle}>Past Bookings</h2>
        {past.length === 0 ? (
          <p>No past bookings.</p>
        ) : (
          past.map((b) => (
            <BookingCard
              key={b._id}
              hotelName={b.hotel.name}
              startDate={b.startDate}
              endDate={b.endDate}
              status={b.status}
            />
          ))
        )}
      </div>
    </div>
  );
};
