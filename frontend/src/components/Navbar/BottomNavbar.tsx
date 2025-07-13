import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { PiMapPinLight } from "react-icons/pi";
import c from "./navbar.module.css";
import { useNavigate, useLocation } from "react-router";
import { paths } from "../../router/paths";

export const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveKey = () => {
    if (location.pathname.startsWith(paths.bookings)) return "booking";
    if (location.pathname.startsWith(paths.wishlist)) return "wishlist";
    if (location.pathname.startsWith(paths.profile)) return "profile";
    return "home";
  };

  const active = getActiveKey();

  return (
    <div className={c.bottomNavbar}>
      <div
        className={`${c.navItem} ${active === "home" ? c.active : ""}`}
        onClick={() => navigate(paths.hotels)}
      >
        <AiOutlineHome className={c.icon} />
        <span>Home</span>
      </div>

      <div
        className={`${c.navItem} ${active === "booking" ? c.active : ""}`}
        onClick={() => navigate(paths.bookings)}
      >
        <PiMapPinLight className={c.icon} />
        <span>Booking</span>
      </div>

      <div
        className={`${c.navItem} ${active === "wishlist" ? c.active : ""}`}
        onClick={() => navigate(paths.wishlist)}
      >
        <AiOutlineHeart className={c.icon} />
        <span>Wishlist</span>
      </div>

      <div
        className={`${c.navItem} ${active === "profile" ? c.active : ""}`}
        onClick={() => navigate(paths.profile)}
      >
        <AiOutlineUser className={c.icon} />
        <span>Profile</span>
      </div>
    </div>
  );
};
