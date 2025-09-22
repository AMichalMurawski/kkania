import { FC } from "react";
import styles from "./Order.module.css";
import { OfferDescription, ReservationForm } from "../../components";
import { useOffers } from "../../context";
import { asString, useScrollToHash, useValidatedQuery } from "../../hooks";

const Order: FC = () => {
    const { data: offers } = useOffers();
    const { plan } = useValidatedQuery({
        plan: asString
    });
    
    useScrollToHash();

    const activeOffer = offers?.filter(offer => offer.name === plan);

    return (
        <section className={styles.sectionConteiner} id="order">
            <ReservationForm />
            {activeOffer?.[0]
                ? <OfferDescription offer={activeOffer?.[0] || null} />
                : <div />
            }
            
        </section>
    )
}

export default Order;