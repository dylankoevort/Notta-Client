import React, { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "../components";
import { createUser } from "../api/UserRepository";
import { auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";

const DashboardLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/web");
    }

    if (isLoaded && isSignedIn) {
      firebaseSignIn();
      addNewUser();
    }
  }, [isSignedIn]);

  const firebaseSignIn = async () => {
    await signInAnonymously(auth)
      .then(() => {
        console.log("FB Sign in: SUCCESS");
      })
      .catch((error) => {
        console.log("FB Sign in: ERROR");
        console.error(error);
      });
  };

  const addNewUser = async () => {
    try {
      await createUser(user);
      console.log("Store User: SUCCESS");
    } catch (error) {
      console.log("Store User: ERROR");
      console.error(error);
      throw error;
    }
  };

  if (!isLoaded) return <Spinner />;

  return <Outlet />;
};

export default DashboardLayout;
