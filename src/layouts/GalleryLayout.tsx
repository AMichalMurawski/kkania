import React from "react";
import { Outlet } from "react-router-dom";
import { Hero } from "../sections";

const GalleryLayout: React.FC = () => {
    return <>
        <Hero />
        <Outlet />
    </>
};

export default GalleryLayout;