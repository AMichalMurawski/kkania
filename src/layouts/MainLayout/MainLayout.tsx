import { FC, Suspense, useEffect } from "react";
import styles from "./MainLayout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, SecondFallback } from "../../sections";
import { MobileMenu, Toast } from "../../components";

const MainLayout: FC = () => {
    const location = useLocation();
    
    useEffect(() => {
        if (!location.hash && !location.search) {
            window.scrollTo(0, 0);
        }
    }, [location]);
    
    return (
        <div className={styles.body}>
            <Header />
            <main className={styles.main}>
                <Suspense fallback={<SecondFallback />}>
                    <Outlet />
                </Suspense>
                <Toast />
            </main>
            <Footer />
            <MobileMenu />
        </div>
    );
};

export default MainLayout;