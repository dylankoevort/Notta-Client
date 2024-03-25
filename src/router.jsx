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
  AccountPage,
  NotebookPage,
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
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/settings",
        element: <AppSettingsPage />,
      },
      {
        path: "/notebooks",
        element: <NotebookPage />,
      },
      {
        path: "/notebooks/:notebookSlug",
        element: <div>Notebook</div>,
      },
      {
        path: "/notebooks/:notebookSlug/:noteSlug",
        element: <div>Note</div>,
      },
      {
        path: "/notebooks/:notebookSlug/:noteSlug/:pageSlug",
        element: <div>Page</div>,
      },
    ],
  },
];

const unprotectedRoutes = [
  {
    path: "/web",
    element: <LandingPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/legal",
    element: <div>Legal</div>,
  },
  {
    path: "/legal/terms-and-conditions",
    element: <div>Terms and Conditions</div>,
  },
  {
    path: "/legal/privacy-policy",
    element: <div>Privacy Policy</div>,
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
