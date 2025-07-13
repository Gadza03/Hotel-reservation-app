import c from "./bookingCard.module.css";

type Props = {
  hotelName: string;
  startDate: string;
  endDate: string;
  status: string;
};

export const BookingCard = ({
  hotelName,
  startDate,
  endDate,
  status,
}: Props) => {
  return (
    <div className={c.card}>
      <h3>{hotelName}</h3>
      <p>
        {new Date(startDate).toLocaleDateString()} –{" "}
        {new Date(endDate).toLocaleDateString()}
      </p>
      <span className={`${c.status} ${c[status]}`}>{status}</span>
    </div>
  );
};
