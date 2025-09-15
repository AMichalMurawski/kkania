import React from "react";
import { useRoutes, useSiteContent } from "../../context";
import { Hero, Offers, OffersDescription } from "../../sections";
import { useScrollToHash } from "../../hooks";
import { Helmet } from "react-helmet";

const OffersPage: React.FC = () => {
    const { data: routes } = useRoutes();
    const { data: siteContent } = useSiteContent();

    useScrollToHash();
    
    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href="/images/hero/hero-offer.webp" />
            </Helmet>
            <Hero imageUrl={routes?.offers.heroImage || ""} heroTitle={routes?.offers.hero} />
            <Offers content={siteContent?.offers.value || []}/>
            <OffersDescription />
        </>
    )
};

export default OffersPage;