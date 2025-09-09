import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useRoutes } from "../context";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutMePage = React.lazy(() => import("../pages/AboutMePage"));
const CategoriesPage = React.lazy(() => import("../pages/CategoriesPage"));
const GalleryPage = React.lazy(() => import("../pages/GalleryPage"));
const OffersPage = React.lazy(() => import("../pages/OffersPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const TermsPage = React.lazy(() => import("../pages/TermsPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

const MainLayout = React.lazy(() => import("../layouts/MainLayout"));
const GalleryLayout = React.lazy(() => import("../layouts/GalleryLayout"));

const AppRoutes: React.FC = () => {
    const { data: routes } = useRoutes();

    if (!routes) return <div>Loading...</div>;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={routes.aboutMe.path} element={<AboutMePage />} />
                    <Route path={routes.offers.path} element={<OffersPage />} />
                    <Route path={routes.contact.path} element={<ContactPage />} />
                    <Route path={routes.terms.path} element={<TermsPage />} />
                    <Route path={routes.categories.path} element={<GalleryLayout />}>
                        <Route index element={<CategoriesPage />} />
                        <Route path={routes.gallery.path} element={<GalleryPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
