import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PropertyDetailPage } from "../pages/PropertyDetailPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { BookingPage } from "../pages/BookingPage";
import { ProfilePage } from "../pages/ProfilePage";
import { LoginPage } from "../pages/LoginPage";

export const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/properties/:id", element: <PropertyDetailPage /> },
    { path: "/favorites", element: <FavoritesPage /> },
    { path: "/booking/:id", element: <BookingPage /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "*", element: <NotFoundPage /> },
]);
