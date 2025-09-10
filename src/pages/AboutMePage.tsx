import React from "react";
import { useAboutMe } from "../context";
import { AboutMe, TopOffers } from "../sections";

const AboutMePage: React.FC = () => {
    const { data: aboutMe } = useAboutMe();

    return (
        <>
            <AboutMe content={aboutMe?.long || []} flexDirection={['column', 'row', 'row']} />
            <TopOffers />
        </>
    )
};

export default AboutMePage;