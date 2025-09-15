import React from "react";
import { useRoutes, useSiteContent } from "../../context";
import { Hero, Offers, OffersDescription } from "../../sections";
import { useScrollToHash } from "../../hooks";

const OffersPage: React.FC = () => {
    const { data: routes } = useRoutes();
    const { data: siteContent } = useSiteContent();

    useScrollToHash();
    
    return (
        <>
            <Hero imageUrl={routes?.offers.heroImage || ""} heroTitle={routes?.offers.hero} />
            <Offers content={siteContent?.offers.value || []}/>
            <OffersDescription />
        </>
    )
};

export default OffersPage;