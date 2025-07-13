import { useEffect, useState } from "react";
import c from "./wishList.module.css";
import { HotelCard } from "../../components";
import type { Hotel } from "../../types/hotel";
import { getWishList } from "../../services/User/userService.js";
import { useAuth } from "../../contexts/AuthContext/useAuth";

export const WishListPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      return;
    }
    const getWishlist = async () => {
      try {
        console.log(user._id);
        const data = await getWishList(user._id);
        setWishlist(data);
      } catch (err) {
        console.error("Failed to fetch wishlist:", err);
        setError("Failed to load wishlist. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getWishlist();
  }, [user?._id]);

  if (loading) return <p>Loading wishlist...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className={c.hotels}>
      <h1 className={c.title}>Your Wishlist</h1>
      <p className={c.subtitle}>Browse the hotels you've saved for later.</p>

      {wishlist.length === 0 ? (
        <p className={c.message}>You haven't added any hotels yet.</p>
      ) : (
        wishlist.map((hotel: Hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))
      )}
    </div>
  );
};
