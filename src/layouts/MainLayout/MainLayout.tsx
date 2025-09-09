import React from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../sections";

const MainLayout: React.FC = () => {
    return <div className={styles.body}>
        <Header />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer />
    </div>
};

export default MainLayout;