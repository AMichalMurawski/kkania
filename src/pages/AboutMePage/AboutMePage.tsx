import React from "react";
import { Helmet } from "react-helmet";
import { useRoutes, useSiteContent } from "../../context";
import { AboutMe, Hero, TopOffers } from "../../sections";

const AboutMePage: React.FC = () => {
    const { data: siteContent } = useSiteContent();
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href="/images/hero/hero-about-me.webp" />
            </Helmet>
            <Hero imageUrl={routes?.aboutMe.heroImage || ""} heroTitle={routes?.aboutMe.hero} />
            <AboutMe content={siteContent?.aboutMe.long || []} flexDirection={['column', 'row', 'row']} />
            <TopOffers />
        </>
    )
};

export default AboutMePage;