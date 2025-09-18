import { FC } from "react";
import { useRoutes } from "../../context";
import { Categories, Hero } from "../../sections";
import { Helmet } from "react-helmet-async";

const CategoriesPage: FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                {routes?.aboutMe
                    && <link rel="preload" as="image" href={`/images/${routes?.categories.heroImageName}.${routes?.categories.heroImageType}`} /> 
                }
            </Helmet>
            <Hero imageName={routes?.categories.heroImageName || ""} imageType={routes?.categories.heroImageType || ""} heroTitle={routes?.categories.hero} />
            <Categories />
        </>
    )
};

export default CategoriesPage;