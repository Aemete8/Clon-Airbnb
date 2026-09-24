import { lazy, Suspense } from "react";
import type { ComponentType, ReactElement } from "react";

import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { MainLayout } from "../components/layouts/MainLayout";
import { BookingLayout } from "../components/layouts/BookingLayout";
import { propertyDetailLoader } from "../loaders/propertyDetailLoader";

const HomePage = lazy(() => import("../pages/HomePage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const PropertyDetailPage = lazy(() => import("../pages/PropertyDetailPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));
const BookingPage = lazy(() => import("../pages/BookingPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RouteErrorPage = lazy(() => import("../pages/RouteErrorPage"));

function withSuspense(Component: ComponentType): ReactElement {
    return (
        <Suspense
            fallback={
                <div className="flex flex-1 min-h-[80vh] flex-col items-center justify-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-accent" />
                    <p className="text-sm font-semibold text-muted">
                        Cargando página...
                    </p>
                </div>
            }
        >
            <Component />
        </Suspense>
    );
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: withSuspense(RouteErrorPage),
        children: [
            { index: true, element: withSuspense(HomePage) },
            { path: "search", element: withSuspense(SearchPage) },
            {
                path: "properties/:id",
                element: <PropertyDetailPage />,
                loader: propertyDetailLoader,
            },
            {
                path: "favorites",
                element: (
                    <ProtectedRoute>
                        {withSuspense(FavoritesPage)}
                    </ProtectedRoute>
                ),
            },
            {
                path: "booking",
                element: (
                    <ProtectedRoute>
                        <BookingLayout />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        path: ":id",
                        element: <BookingPage />,
                    },
                ],
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
            },
            { path: "login", element: <LoginPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);
