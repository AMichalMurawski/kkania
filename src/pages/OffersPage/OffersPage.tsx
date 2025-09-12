import React from "react";
import { useRoutes } from "../../context";
import { Hero, Offers, OffersDescription } from "../../sections";
import { OfferDescription } from "../../components";
import { useScrollToHash } from "../../hooks";

const OffersPage: React.FC = () => {
    const { data: routes } = useRoutes();
    useScrollToHash();
    
    return (
        <>
            <Hero imageUrl={routes?.offers.heroImage || ""} heroTitle={routes?.offers.hero} />
            <Offers />
            <OffersDescription />
        </>
    )
};

export default OffersPage;