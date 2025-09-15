import React, { ReactNode, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutMeProvider, useRoutes } from "../context";
import { TopGalleryProvider } from "../context/ConfigProviders/TopGalleryProvider";

const AboutMePage = React.lazy(() => import("../pages/AboutMePage/AboutMePage"));
const CategoriesPage = React.lazy(() => import("../pages/CategoriesPage/CategoriesPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage/ContactPage"));
const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const GalleryPage = React.lazy(() => import("../pages/GalleryPage/GalleryPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));
const OffersPage = React.lazy(() => import("../pages/OffersPage/OffersPage"));
const OrderPage = React.lazy(() => import("../pages/OrderPage/OrderPage"));
const TermsPage = React.lazy(() => import("../pages/TermsPage/TermsPage"));

const MainLayout = React.lazy(() => import("../layouts/MainLayout/MainLayout"));

const HomePageProvider = ({ children }: { children: ReactNode }) => {
    return (
        <TopGalleryProvider>
            {children}
        </TopGalleryProvider>
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
                    <Route path={routes.categories.path} element={<CategoriesPage />} />
                    <Route path={routes.gallery.path} element={<GalleryPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
