import { FC } from "react";
import { ContactMe, Hero } from "../../sections";
import { useRoutes } from "../../context";
import { Helmet } from "react-helmet-async";

const ContactPage: FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                {routes?.aboutMe
                    && <link rel="preload" as="image" href={`/images/${routes?.contact.heroImageName}.${routes?.contact.heroImageType}`} /> 
                }
            </Helmet>
            <Hero imageName={routes?.contact.heroImageName || ""} imageType={routes?.contact.heroImageType || ""} heroTitle={routes?.contact.hero} />
            <ContactMe />
        </>
    )
};

export default ContactPage;