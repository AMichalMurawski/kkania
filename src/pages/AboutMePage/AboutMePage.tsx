import React from "react";
import { useRoutes, useSiteContent } from "../../context";
import { AboutMe, Hero, TopOffers } from "../../sections";

const AboutMePage: React.FC = () => {
    const { data: siteContent } = useSiteContent();
    const { data: routes } = useRoutes();

    return (
        <>
            <Hero imageUrl={routes?.aboutMe.heroImage || ""} heroTitle={routes?.aboutMe.hero} />
            <AboutMe content={siteContent?.aboutMe.long || []} flexDirection={['column', 'row', 'row']} />
            <TopOffers />
        </>
    )
};

export default AboutMePage;