import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import { DashboardLayout, RootLayout } from "./layouts";

import {
  DashboardPage,
  CollectionsPage,
  NotebooksPage,
  NotesPage,
  NotePage,
} from "./routes"; // App
import { AccountPage, AppSettingsPage, SignInPage, SignUpPage } from "./routes"; // User
import { LandingPage, LoadingPage, NoRoutePage } from "./routes"; // Misc

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
        path: "/notes",
        element: <NotesPage />,
      },
      {
        path: "/notes/:noteSlug",
        element: <NotePage />,
      },
      // {
      //   path: "/collections",
      //   element: <CollectionsPage />,
      // },
      // {
      //   path: "/:collectionSlug",
      //   element: <NotebooksPage />,
      // },
      // {
      //   path: "/:collectionSlug/:notebookSlug",
      //   element: <NotesPage />,
      // },
      // {
      //   path: "/:collectionSlug/:notebookSlug/",
      //   element: <NotePage />,
      // },
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
