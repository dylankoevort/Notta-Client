import React, { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "../components";
import { createUser } from "../api";

const DashboardLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/web");
    }

    if (isLoaded && isSignedIn) {
      addNewUser();
    }
  }, [isSignedIn]);

  const addNewUser = async () => {
    try {
      const data = {
        id: user.id,
        username: user.username,
        email: user.primaryEmailAddress.emailAddress,
      };
      await createUser(data);
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  };

  if (!isLoaded) return <Spinner />;

  return <Outlet />;
};

export default DashboardLayout;
