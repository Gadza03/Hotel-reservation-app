import { useNavigate } from "react-router";
import type { Hotel } from "../../types/hotel";
import c from "./hotel.module.css";
import { paths } from "../../router/paths";

type HotelCardProps = {
  hotel: Hotel;
};

export const HotelCard = ({ hotel }: HotelCardProps) => {
  const navigate = useNavigate();
  const handleCard = (id: string) => {
    navigate(`${paths.hotels}/${id}`);
  };

  return (
    <div className={c.hotelCard} onClick={() => handleCard(hotel._id)}>
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
