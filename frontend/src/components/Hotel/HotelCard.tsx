import type { Hotel } from "../../types/hotel";
import c from "./hotel.module.css";

type HotelCardProps = {
  hotel: Hotel;
};

export const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className={c.hotelCard}>
      <img src={hotel.imageUrls[0]} alt={hotel.name} className={c.hotelImage} />
      <div className={c.hotelInfo}>
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <div className={c.priceReview}>
          <p className={c.price}>
            <strong>€{hotel.pricePerNight}</strong>/night
          </p>
          <p className={c.review}>⭐{hotel.rating}</p>
        </div>
      </div>
    </div>
  );
};
