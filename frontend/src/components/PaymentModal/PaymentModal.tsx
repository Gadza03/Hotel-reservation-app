import c from "../ReserveBar/reserveBar.module.css";

type Props = {
  firstName?: string;
  lastName?: string;
  startDate: Date;
  endDate: Date;
  nights: number;
  totalPrice: number;
  onPay: () => void;
  onClose: () => void;
};

export const PaymentModal = ({
  firstName,
  lastName,
  startDate,
  endDate,
  nights,
  totalPrice,
  onPay,
  onClose,
}: Props) => {
  return (
    <div className={c.modalOverlay}>
      <div className={c.modalContent}>
        <h2>Confirm Your Reservation</h2>
        <p>
          <strong>Name:</strong> {firstName} {lastName}
        </p>
        <p>
          <strong>Dates:</strong> {startDate.toLocaleDateString()} –{" "}
          {endDate.toLocaleDateString()}
        </p>
        <p>
          <strong>Nights:</strong> {nights}
        </p>
        <p>
          <strong>Total:</strong> ${totalPrice}
        </p>
        <button className={c.button} onClick={onPay}>
          Pay Now
        </button>
        <button className={`${c.button} ${c.cancel}`} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
