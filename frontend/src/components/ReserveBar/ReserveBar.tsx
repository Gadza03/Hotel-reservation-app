import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import type { Hotel } from "../../types/hotel";
import c from "./reserveBar.module.css";
import { useHotelBookings } from "../../hooks/useHotelBookings";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext/useAuth";
import { createBooking } from "../../services/Booking/bookingService";
import type { CreateBooking } from "../../types/createBooking";
import { PaymentModal } from "../PaymentModal/PaymentModal";

type Props = {
  hotel: Hotel;
};

export const ReserveBar = ({ hotel }: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { bookedRanges, loading, refetch } = useHotelBookings(hotel._id);
  const { user } = useAuth();

  const nights =
    startDate && endDate
      ? (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      : 0;
  const totalPrice = nights * hotel.pricePerNight;

  const handleClick = () => {
    setShowPicker(true);
  };

  const handleReserve = () => {
    if (!startDate || !endDate || !user) return;
    setShowModal(true);
  };

  const handleFinalConfirm = async () => {
    if (!user || !startDate || !endDate) return;

    try {
      const booking: CreateBooking = {
        userId: user._id,
        hotelId: hotel._id,
        startDate,
        endDate,
        totalPrice,
      };

      await createBooking(booking);
      toast.success("Reservation successful!");

      setShowPicker(false);
      setShowModal(false);
      setStartDate(null);
      setEndDate(null);
      refetch();
    } catch (err) {
      console.error("Reservation error:", err);
      toast.error("Error creating reservation");
    }
  };

  return (
    <div className={`${c.bar} container`}>
      <div>
        <p className={c.label}>Price estimate</p>
        <p className={c.price}>
          ${hotel.pricePerNight}
          <span className={c.unit}>/night</span>
        </p>
      </div>

      {!showPicker ? (
        <button className={c.button} onClick={handleClick}>
          Reserve Now
        </button>
      ) : (
        <div className={c.modalOverlay}>
          <div className={c.modalContent}>
            <label htmlFor="start-date" className={c.label}>
              Start Date
            </label>
            <DatePicker
              id="start-date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              excludeDateIntervals={bookedRanges}
              placeholderText="Start Date"
              className={c.dateInput}
            />
            <label htmlFor="end-date" className={c.label}>
              End Date
            </label>
            <DatePicker
              id="end-date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
              excludeDateIntervals={bookedRanges}
              placeholderText="End Date"
              className={c.dateInput}
            />
            <button
              className={c.button}
              disabled={!startDate || !endDate || loading}
              onClick={handleReserve}
            >
              Continue
            </button>
            <button
              className={`${c.button} ${c.cancel}`}
              onClick={() => setShowPicker(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showModal && startDate && endDate && user && (
        <PaymentModal
          firstName={user.firstName}
          lastName={user.lastName}
          startDate={startDate}
          endDate={endDate}
          nights={nights}
          totalPrice={totalPrice}
          onPay={handleFinalConfirm}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};
