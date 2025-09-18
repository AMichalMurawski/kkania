import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useRoutes, useSiteContent } from "../../context";
import { AboutMe, Hero, TopOffers } from "../../sections";

const AboutMePage: FC = () => {
    const { data: siteContent } = useSiteContent();
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                {routes?.aboutMe
                    && <link rel="preload" as="image" href={`/images/${routes?.aboutMe.heroImageName}.${routes?.aboutMe.heroImageType}`} /> 
                }
            </Helmet>
            <Hero imageName={routes?.aboutMe.heroImageName || ""} imageType={routes?.aboutMe.heroImageType || ""} heroTitle={routes?.aboutMe.hero} />
            <AboutMe content={siteContent?.aboutMe.long || []} flexDirection={['column', 'row', 'row']} />
            <TopOffers />
        </>
    )
};

export default AboutMePage;