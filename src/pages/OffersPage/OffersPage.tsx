import { FC } from "react";
import { useRoutes, useSiteContent } from "../../context";
import { Hero, Offers, OffersDescription } from "../../sections";
import { useScrollToHash } from "../../hooks";
import { Helmet } from "react-helmet-async";

const OffersPage: FC = () => {
    const { data: routes } = useRoutes();
    const { data: siteContent } = useSiteContent();

    useScrollToHash();
    
    return (
        <>
            <Helmet>
                {routes?.aboutMe
                    && <link rel="preload" as="image" href={`/images/${routes?.offers.heroImageName}.${routes?.offers.heroImageType}`} /> 
                }
            </Helmet>
            <Hero imageName={routes?.offers.heroImageName || ""} imageType={routes?.offers.heroImageType || ""} heroTitle={routes?.offers.hero} />
            <Offers content={siteContent?.offers.value || []}/>
            <OffersDescription />
        </>
    )
};

export default OffersPage;