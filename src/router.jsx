import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import { DashboardLayout, RootLayout } from "./layouts";

import {
  LandingPage,
  SignInPage,
  SignUpPage,
  DashboardPage,
  AppSettingsPage,
  NoRoutePage,
  LoadingPage,
} from "./routes";

import { ErrorBoundary } from "./components";

const protectedRoutes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/settings",
        element: <AppSettingsPage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
];

const unprotectedRoutes = [
  {
    path: "/web",
    element: <LandingPage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/error",
    element: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NoRoutePage />,
  },
];

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <App />,
        children: protectedRoutes,
      },
      ...unprotectedRoutes,
    ],
  },
]);

export default router;
