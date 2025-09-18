import { FC, Suspense } from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Header, SecondFallback } from "../../sections";
import { MobileMenu, Toast } from "../../components";

const MainLayout: FC = () => {
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
    )
};

export default MainLayout;