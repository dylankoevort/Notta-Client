import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

const LandingLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) navigate("/dashboard");
  }, [isSignedIn]);

  if (!isLoaded) return "Loading...";

  return <Outlet />;
};

export default LandingLayout;
