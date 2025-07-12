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
        <p className={c.price}>€{hotel.pricePerNight} / night</p>
      </div>
    </div>
  );
};
