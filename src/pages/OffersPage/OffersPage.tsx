import React from "react";
import { useRoutes } from "../../context";
import { Hero, Offers } from "../../sections";

const OffersPage: React.FC = () => {
    const { data: routes } = useRoutes();
    
    return (
        <>
            <Hero imageUrl={routes?.offers.heroImage || ""} heroTitle={routes?.offers.hero} />
            <Offers />
        </>
    )
};

export default OffersPage;