import { Outlet } from "react-router";
import { BottomNavbar } from "../components";

export const MainLayout = () => {
  return (
    <div className="paddingNav">
      <BottomNavbar />
      <Outlet />
    </div>
  );
};
