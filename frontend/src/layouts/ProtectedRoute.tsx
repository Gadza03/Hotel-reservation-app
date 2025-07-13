import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext/useAuth";
import { paths } from "../router/paths";
import { Navigate, Outlet } from "react-router";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!user && !isLoading) {
      toast.error("You must log in to access this page");
    }
  }, [user, isLoading]);

  if (isLoading) {
    return <div className="loader">loading...</div>;
  }

  if (!user) {
    return <Navigate to={paths.home} replace />;
  }

  return <Outlet />;
};
