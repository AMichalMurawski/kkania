import React from "react";
import styles from "./Order.module.css";
import { OfferDescription, ReservationForm } from "../../components";
import { useOffers } from "../../context";
import { asString, useValidatedQuery } from "../../hooks";

const Order: React.FC = () => {
    const { data: offers } = useOffers();
    const { plan } = useValidatedQuery({
        plan: asString
    });

    const activeOffer = offers?.filter(offer => offer.name === plan);

    return (
        <section className={styles.sectionConteiner}>
            <ReservationForm />
            {activeOffer?.[0]
                ? <OfferDescription offer={activeOffer?.[0] || null} />
                : <div />
            }
            
        </section>
    )
}

export default Order;