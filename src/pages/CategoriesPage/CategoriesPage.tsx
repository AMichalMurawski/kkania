import React from "react";
import { useRoutes } from "../../context";
import { Categories, Hero } from "../../sections";
import { Helmet } from "react-helmet-async";

const CategoriesPage: React.FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href="/images/hero/hero-gallery.webp" />
            </Helmet>
            <Hero imageName={routes?.categories.heroImageName || ""} imageType={routes?.categories.heroImageType || ""} heroTitle={routes?.categories.hero} />
            <Categories />
        </>
    )
};

export default CategoriesPage;