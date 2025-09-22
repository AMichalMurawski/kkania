import { FC, Suspense, useEffect, useState } from "react";
import styles from "./MainLayout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, SecondFallback } from "../../sections";
import { MobileMenu, Toast } from "../../components";
import ColorsPalletes from "../../components/ColorsPalletes/CollorsPalletes";

const MainLayout: FC = () => {
    const location = useLocation();
    const [showPalletes, setShowPalletes] = useState<boolean>(false);
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key.toLocaleLowerCase() === "i") {
                setShowPalletes(true)
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);
    const hidePalletes = () => {
        setShowPalletes(false);
    };

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
            {showPalletes ? <ColorsPalletes onExit={hidePalletes} /> : null}
        </div>
    );
};

export default MainLayout;