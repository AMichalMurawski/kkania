import React from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../sections";
import { MobileMenu, Toast } from "../../components";

const MainLayout: React.FC = () => {
    return (
        <div className={styles.body}>
            <Header />
            <main className={styles.main}>
                <Outlet />
                <Toast />
            </main>
            <Footer />
            <MobileMenu />
        </div>
    )
};

export default MainLayout;