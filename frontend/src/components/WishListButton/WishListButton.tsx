import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import c from "./wishListButton.module.css";

type Props = {
  hotelId: string;
};

export const WishListButton = ({ hotelId }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    //dodat  logiku kad budem imao context usera
    setLiked((prev) => !prev);
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
