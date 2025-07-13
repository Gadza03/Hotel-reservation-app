import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { PiMapPinLight } from "react-icons/pi";
import c from "./navbar.module.css";

export const BottomNavbar = () => {
  return (
    <div className={c.bottomNavbar}>
      <div className={`${c.navItem} ${c.active}`}>
        <AiOutlineHome className={c.icon} />
        <span>Home</span>
      </div>
      <div className={c.navItem}>
        <PiMapPinLight className={c.icon} />
        <span>Booking</span>
      </div>
      <div className={c.navItem}>
        <AiOutlineHeart className={c.icon} />
        <span>Wishlist</span>
      </div>
      <div className={c.navItem}>
        <AiOutlineUser className={c.icon} />
        <span>Profile</span>
      </div>
    </div>
  );
};
