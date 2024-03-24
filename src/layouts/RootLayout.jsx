import { Link, Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import envVariables from "../configs/envVariables.js";

const PUBLISHABLE_KEY = envVariables.clerkPublishableKey;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <Outlet />
    </ClerkProvider>
  );
};

export default RootLayout;
