import React from "react";
import { useAboutMe, useRoutes } from "../../context";
import { AboutMe, Hero, TopOffers } from "../../sections";

const AboutMePage: React.FC = () => {
    const { data: aboutMe } = useAboutMe();
    const { data: routes } = useRoutes();

    return (
        <>
            <Hero imageUrl={routes?.aboutMe.heroImage || ""} heroTitle={routes?.aboutMe.hero} />
            <AboutMe content={aboutMe?.long || []} flexDirection={['column', 'row', 'row']} />
            <TopOffers />
        </>
    )
};

export default AboutMePage;