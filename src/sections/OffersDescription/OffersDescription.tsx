import React from "react";
import styles from "./OffersDescription.module.css";
import { OfferDescription } from "../../components";
import { asString, useScrollToHash, useValidatedQuery } from "../../hooks";
import { useOffers, useRoutes } from "../../context";
import { Button } from "../../elements";

const OffersDescription: React.FC = () => {
    const { data: routes } = useRoutes();
    const { data: offers } = useOffers();
    const { plan } = useValidatedQuery({
        plan: asString
    });

    const activeOffer = offers?.filter(offer => offer.name === plan);


    return (
        <section className={`${styles.sectionConteiner} ${!activeOffer?.[0] ? styles.deactive : null}`} id="offersDescription">
            <OfferDescription offer={activeOffer?.[0] || null} />
            <Button linkTo={`${routes?.order.path}?plan=${plan}` || ""} >Zapytaj o termin</Button>
        </section>
    );
};

export default OffersDescription;