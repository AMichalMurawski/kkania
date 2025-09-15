import React from "react";
import { Hero, Order } from "../../sections";
import { Helmet } from "react-helmet-async";
import { useRoutes } from "../../context";

const OrderPage: React.FC = () => {
    const { data: routes } = useRoutes();

    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href="/images/hero/hero-offer.webp" />
            </Helmet>
            <Hero imageUrl={routes?.offers.heroImage || ""} heroTitle={routes?.offers.hero} />
            <Order />
        </>
    )
};

export default OrderPage;