import React, { ReactNode, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutMeProvider, useRoutes } from "../context";

const AboutMePage = React.lazy(() => import("../pages/AboutMePage"));
const CategoriesPage = React.lazy(() => import("../pages/CategoriesPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const GalleryPage = React.lazy(() => import("../pages/GalleryPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));
const OffersPage = React.lazy(() => import("../pages/OffersPage"));
const OrderPage = React.lazy(() => import("../pages/OrderPage"));
const TermsPage = React.lazy(() => import("../pages/TermsPage"));

const GalleryLayout = React.lazy(() => import("../layouts/GalleryLayout/GalleryLayout"));
const MainLayout = React.lazy(() => import("../layouts/MainLayout/MainLayout"));

const HomePageProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AboutMeProvider>
            {children}
        </AboutMeProvider>
    )
};

const AppRoutes: React.FC = () => {
    const { data: routes } = useRoutes();

    if (!routes) return <div>Loading...</div>;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePageProvider><HomePage /></HomePageProvider>} />
                    <Route path={routes.aboutMe.path} element={<AboutMeProvider><AboutMePage /></AboutMeProvider>} />
                    <Route path={routes.offers.path} element={<OffersPage />} />
                    <Route path={routes.contact.path} element={<ContactPage />} />
                    <Route path={routes.terms.path} element={<TermsPage />} />
                    <Route path={routes.order.path} element={<OrderPage />} />
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
