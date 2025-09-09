import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../sections";

const MainLayout: React.FC = () => {
    return <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
};

export default MainLayout;