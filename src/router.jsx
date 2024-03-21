import { createBrowserRouter } from "react-router-dom";

// Import the layouts
import { RootLayout, DashboardLayout } from "./layouts";

// Import the components
import {
  HomePage,
  SignInPage,
  SignUpPage,
  DashboardPage,
  AppSettingsPage,
} from "./routes";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/settings", element: <AppSettingsPage /> },
        ],
      },
    ],
  },
]);

export default router;
