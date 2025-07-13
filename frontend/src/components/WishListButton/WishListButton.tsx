import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import c from "./wishListButton.module.css";
import { updateWishList, getWishList } from "../../services/User/userService";
import { useAuth } from "../../contexts/AuthContext/useAuth";
import type { Hotel } from "../../types/hotel";

type Props = {
  hotelId: string;
};

export const WishListButton = ({ hotelId }: Props) => {
  const { user } = useAuth();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkIfLiked = async () => {
      if (!user) return;

      try {
        const wishlist = await getWishList(user._id);
        const isLiked = wishlist.some((hotel: Hotel) => hotel._id === hotelId);
        setLiked(isLiked);
      } catch (error) {
        console.error("Error loading wishlist:", error);
      }
    };

    checkIfLiked();
  }, [user, hotelId]);

  const toggle = async () => {
    if (!user) {
      return;
    }

    try {
      const response = await updateWishList(user._id, hotelId);
      const message = response?.data?.message;
      setLiked((prev) => !prev);

      if (message?.includes("added")) {
        setLiked(true);
      } else if (message?.includes("removed")) {
        setLiked(false);
      }
    } catch (error: any) {
      console.error("Error toggling wishlist:", error);
    }
  };

  return (
    <div className={c.blur}>
      <button className={c.button} onClick={toggle}>
        {liked ? (
          <FaHeart color="red" size={24} />
        ) : (
          <FaRegHeart color="white" size={24} />
        )}
      </button>
    </div>
  );
};
