import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <div>Nav</div>
      <Outlet />
    </>
  );
};
