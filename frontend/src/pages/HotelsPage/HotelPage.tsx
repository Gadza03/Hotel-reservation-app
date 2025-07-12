import c from "./hotel.module.css";
import { useEffect, useState } from "react";
import type { Hotel } from "../../types/hotel";
import { getAllHotels } from "../../services/Hotel/hotelService";
import { SearchBar } from "../../components/Searchbar/Searchbar";
import { HotelCard } from "../../components";

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
          <div className={c.textBox}>
            <p className={c.subtitle}>Escape the ordinary</p>
            <h1 className={c.title}>Discover comfort and peace in Split</h1>
            <SearchBar searchTerm={filter} setSearchTerm={setFilter} />
          </div>
        </div>
      </div>

      <div className={`${c.hotelList} container`}>
        <h2 className={c.sectionTitle}>Hotel accommodation</h2>
        <div className={c.cardGrid}>
          {filteredHotels.length === 0 ? (
            <p className={c.noResults}>No hotels found.</p>
          ) : (
            filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
