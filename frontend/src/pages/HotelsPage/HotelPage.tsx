import c from "./hotel.module.css";
import { useEffect, useState } from "react";
import type { Hotel } from "../../types/hotel";
import { getAllHotels } from "../../services/Hotel/hotelService";
import { SearchBar } from "../../components/Searchbar/Searchbar";
import { BottomNavbar, HotelCard } from "../../components";

export const HotelPage = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const allHotels = await getAllHotels();
        setHotels(allHotels);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className={c.overlayWrap}>
        <div className={c.overlay}>
          <div className={`${c.textBox} container`}>
            <p className={c.subtitle}>Escape the ordinary</p>
            <h1 className={c.title}>Discover comfort and peace in Split</h1>
            <SearchBar searchTerm={filter} setSearchTerm={setFilter} />
          </div>
        </div>
      </div>

      {filteredHotels.length === 0 ? (
        <h3 className={`${c.noResults} container`}>No hotels found</h3>
      ) : (
        <>
          <div className={`${c.hotelList} container`}>
            <h2 className={c.sectionTitle}>Spacious Rooms</h2>
            <div className={c.cardGrid}>
              {filteredHotels
                .slice(0, Math.ceil(filteredHotels.length / 2))
                .map((hotel) => (
                  <HotelCard key={hotel._id} hotel={hotel} />
                ))}
            </div>
          </div>

          <div className={`${c.hotelList} container`}>
            <h2 className={c.sectionTitle}>Relax by the Pool</h2>
            <div className={c.cardGrid}>
              {filteredHotels
                .slice(Math.ceil(filteredHotels.length / 2))
                .map((hotel) => (
                  <HotelCard key={hotel._id} hotel={hotel} />
                ))}
            </div>
          </div>
        </>
      )}
      <BottomNavbar />
    </div>
  );
};
