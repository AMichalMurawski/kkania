import { FC, lazy, ReactNode, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useRoutes } from "../context";
import { TopGalleryProvider } from "../context/ConfigProviders/TopGalleryProvider";
import { SecondFallback } from "../sections";

const AboutMePage = lazy(() => import("../pages/AboutMePage/AboutMePage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage/CategoriesPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const OffersPage = lazy(() => import("../pages/OffersPage/OffersPage"));
const OrderPage = lazy(() => import("../pages/OrderPage/OrderPage"));
const TermsPage = lazy(() => import("../pages/TermsPage/TermsPage"));

const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));

const HomePageProvider = ({ children }: { children: ReactNode }) => {
    return (
        <TopGalleryProvider>
            {children}
        </TopGalleryProvider>
    )
};

const AppRoutes: FC = () => {
    const { data: routes } = useRoutes();
    const [fallbackLoad, setFallbackLaod] = useState<boolean>(false)

    useEffect(() => {

    })
    useEffect(() => {
        const handleLoad = () => {
            setFallbackLaod(true);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, [])
    
    if (!routes || !fallbackLoad) return <SecondFallback />;

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
