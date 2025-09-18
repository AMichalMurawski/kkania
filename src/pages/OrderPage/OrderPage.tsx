import { FC } from "react";
import { Hero, Order } from "../../sections";
import { Helmet } from "react-helmet-async";
import { useRoutes } from "../../context";

const OrderPage: FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                {routes?.aboutMe
                    && <link rel="preload" as="image" href={`/images/${routes?.offers.heroImageName}.${routes?.offers.heroImageType}`} /> 
                }
            </Helmet>
            <Hero imageName={routes?.offers.heroImageName || ""} imageType={routes?.offers.heroImageType || ""} heroTitle={routes?.offers.hero} />
            <Order />
        </>
    )
};

export default OrderPage;