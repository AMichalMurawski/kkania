import React from "react";
import styles from "./AboutMe.module.css";
import { useAboutMe, useRoutes } from "../../context";
import { AboutMe, Hero, TopOffers } from "../../sections";

const AboutMePage: React.FC = () => {
    const { data: aboutMe } = useAboutMe();
    const { data: routes } = useRoutes();

    return (
        <>
            <Hero imageUrl={routes?.aboutMe.heroImage || ""}>
                <h2 className={styles.title}>{routes?.aboutMe.hero}</h2>
            </Hero>
            <AboutMe content={aboutMe?.long || []} flexDirection={['column', 'row', 'row']} />
            <TopOffers />
        </>
    )
};

export default AboutMePage;