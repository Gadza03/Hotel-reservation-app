import { useEffect } from "react";
import { useLocation } from "react-router";
import { paths } from "./paths";
import { useRoutes } from "react-router";
import { WelcomePage } from "../pages";

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
  ]);
}
