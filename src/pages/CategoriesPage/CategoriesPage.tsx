import React from "react";
import { useRoutes } from "../../context";
import { Categories, Hero } from "../../sections";

const CategoriesPage: React.FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Hero imageUrl={routes?.categories.heroImage || ""} heroTitle={routes?.categories.hero} />
            <Categories />
        </>
    )
};

export default CategoriesPage;