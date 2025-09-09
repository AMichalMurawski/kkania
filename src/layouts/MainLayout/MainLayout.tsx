import React from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../sections";
import { MobileMenu } from "../../components";

const MainLayout: React.FC = () => {
    return <div className={styles.body}>
        <Header />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer />
        <MobileMenu />
    </div>
};

export default MainLayout;