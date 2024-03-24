import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/web");
    }
  }, [isSignedIn]);

  if (!isLoaded) return "Loading...";

  return <Outlet />;
};

export default DashboardLayout;
