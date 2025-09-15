import React from "react";
import styles from "./Offers.module.css";
import { useOffers } from "../../context";
import { OffersList } from "../../components";
import { OffersProps } from "./types";

const Offers: React.FC<OffersProps> = ({content}) => {
    const { data: offers } = useOffers();

    return (
        <section className={styles.sectionConteiner}>
            <p className={styles.description}>{content}</p>
            <OffersList offers={offers || []} />
        </section>
    );
};

export default Offers;