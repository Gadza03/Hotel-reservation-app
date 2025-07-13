import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import c from "./wishListButton.module.css";
import { updateWishList } from "../../services/User/userService";
import { useAuth } from "../../contexts/AuthContext/useAuth";

type Props = {
  hotelId: string;
};

export const WishListButton = ({ hotelId }: Props) => {
  const { user } = useAuth();

  const [liked, setLiked] = useState(false);

  const toggle = async () => {
    if (!user) {
      alert("You must be logged in to manage wishlist.");
      return;
    }
    try {
      const response = await updateWishList(user._id, hotelId);

      const message = response.data.message;

      if (message.includes("added")) {
        setLiked(true);
      } else if (message.includes("removed")) {
        setLiked(false);
      }
    } catch (error: any) {
      console.error("Error toggling wishlist:", error);
      setLiked((prev) => !prev);
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
