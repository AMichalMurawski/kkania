import React from "react";
import { ContactMe, Hero } from "../../sections";
import { useRoutes } from "../../context";
import { Helmet } from "react-helmet-async";

const ContactPage: React.FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href="/images/hero/hero-contact.webp" />
            </Helmet>
            <Hero imageName={routes?.contact.heroImageName || ""} imageType={routes?.contact.heroImageType || ""} heroTitle={routes?.contact.hero} />
            <ContactMe />
        </>
    )
};

export default ContactPage;