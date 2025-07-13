import { useEffect } from "react";
import { useLocation } from "react-router";
import { paths } from "./paths";
import { useRoutes } from "react-router";
import {
  BookingPage,
  HotelDetailsPage,
  HotelPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  WelcomePage,
  WishListPage,
} from "../pages";
import { MainLayout } from "../layouts";

export default function Router() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return useRoutes([
    {
      path: paths.home,
      element: <WelcomePage />,
    },
    {
      path: paths.login,
      element: <LoginPage />,
    },
    {
      path: paths.register,
      element: <RegisterPage />,
    },
    {
      element: <MainLayout />,
      children: [
        { path: paths.hotels, element: <HotelPage /> },
        { path: paths.profile, element: <ProfilePage /> },
        { path: paths.wishlist, element: <WishListPage /> },
        { path: paths.bookings, element: <BookingPage /> },
      ],
    },
    {
      path: paths.hotelDetails,
      element: <HotelDetailsPage />,
    },
  ]);
}
