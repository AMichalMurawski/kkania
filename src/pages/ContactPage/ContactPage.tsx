import React from "react";
import { ContactMe, Hero } from "../../sections";
import { useRoutes } from "../../context";

const ContactPage: React.FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Hero imageUrl={routes?.contact.heroImage || ""} heroTitle={routes?.contact.hero} />
            <ContactMe />
        </>
    )
};

export default ContactPage;