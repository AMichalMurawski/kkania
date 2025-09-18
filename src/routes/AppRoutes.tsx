import React, { ReactNode, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useRoutes } from "../context";
import { TopGalleryProvider } from "../context/ConfigProviders/TopGalleryProvider";
import { MainFallback } from "../sections";

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
    const [fallbackLoad, setFallbackLaod] = useState<{
        isLoad: boolean;
        isAnimate: boolean;
    }>({
        isLoad: false,
        isAnimate: false
    });

    useEffect(() => {

    })
    useEffect(() => {
        const handleLoad = () => {
            setFallbackLaod((prev) => ({
                ...prev,
                isLoad: true
            }));
        };

        setTimeout(() => {
            setFallbackLaod((prev) => ({
                ...prev,
                isAnimate: true
            }))
        }, 5000)

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, [])
    
    if (!routes || !fallbackLoad.isLoad || !fallbackLoad.isAnimate) return <MainFallback />;

    return (
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePageProvider><HomePage /></HomePageProvider>} />
                    <Route path={routes.aboutMe.path} element={<AboutMePage />} />
                    <Route path={routes.offers.path} element={<OffersPage />} />
                    <Route path={routes.contact.path} element={<ContactPage />} />
                    <Route path={routes.terms.path} element={<TermsPage />} />
                    <Route path={routes.order.path} element={<OrderPage />} />
                    <Route path={routes.categories.path} element={<CategoriesPage />} />
                    <Route path={routes.gallery.path} element={<GalleryPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
    );
};

export default AppRoutes;
