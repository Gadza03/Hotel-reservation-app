import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getHotelById } from "../../services/Hotel/hotelService";
import type { Hotel } from "../../types/hotel";
import c from "./hotelDetails.module.css";
import { ArrowBack, ReserveBar, WishListButton } from "../../components";
import { FaCheckCircle } from "react-icons/fa";

export const HotelDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      if (!id) return;
      try {
        const res = await getHotelById(id);
        setHotel(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotel();
  }, []);

  if (!hotel) {
    return <>Something went wrong</>;
  }

  return (
    <div className={c.page}>
      <div className={c.imageWrapper}>
        <img src={hotel.imageUrls[0]} alt={hotel.name} className={c.image} />
        <div className={`${c.topControls} container`}>
          <ArrowBack />
          <WishListButton hotelId={hotel._id} />
        </div>
      </div>

      <div className={`${c.content} container`}>
        <h1 className={c.title}>{hotel.name}</h1>
        <p className={c.location}>{hotel.address}</p>

        <section className={c.section}>
          <h2>About Us</h2>
          <p>{hotel.description}</p>
        </section>

        <section className={c.section}>
          <h2>Services & Facilities</h2>
          <ul className={c.amenities}>
            {hotel.amenities?.map((item) => (
              <li key={item} className={c.amenity}>
                <FaCheckCircle color="#2c67ff" /> {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <ReserveBar hotel={hotel} />
    </div>
  );
};
