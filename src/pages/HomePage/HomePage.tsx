import React from "react";
import styles from "./HomePage.module.css";
import { useRoutes, useSiteContent } from "../../context";
import { AboutMe, ContactMe, Hero, TopGallery, TopOffers } from "../../sections";
import { Button } from "../../elements";

const HomePage: React.FC = () => {
    const { data: routes } = useRoutes();
    const { data: siteContent } = useSiteContent();

    return <>
        <Hero imageUrl={routes?.home.heroImage || ""} >
            <div className={styles.heroContent}>
                <h2>Zachowaj najpiękniejsze wspomnienia</h2>
                <h1>Profesjonalne sesje fotograficzne</h1>
                <div className={styles.heroButtonsWrapper}>
                    <Button linkTo={routes?.order.path || ""} darkStyle >Zapytaj o termin</Button>
                    <Button linkTo={routes?.offers.path || ""} >Sprawdź ofertę</Button>
                </div>
            </div>
        </Hero>
        <AboutMe content={siteContent?.aboutMe.short || []} flexDirection={['column', 'row', 'row']} />
        <TopGallery />
        <TopOffers darkStyle />
        <ContactMe />
    </>
};

export default HomePage;