/* App */
import DashboardPage from "./app/dashboard";
import CollectionsPage from "./app/collections";
import NotebooksPage from "./app/notebooks";
import NotesPage from "./app/notes";
import NotePage from "./app/note";

/* User */
import AccountPage from "./user/account";
import AppSettingsPage from "./user/settings";
import SignInPage from "./user/signIn";
import SignUpPage from "./user/signUp";

/* Misc */
import LandingPage from "./misc/landing";
import LoadingPage from "./misc/loading";
import NoRoutePage from "./misc/noRoute";

export { DashboardPage, CollectionsPage, NotebooksPage, NotesPage, NotePage }; // App

export { AccountPage, AppSettingsPage, SignInPage, SignUpPage }; // User

export { LandingPage, LoadingPage, NoRoutePage }; // Misc
