import React from "react";
import styles from "./Offers.module.css";
import { useOffers } from "../../context";
import { OffersList } from "../../components";

const Offers: React.FC = () => {
    const { data: offers } = useOffers();

    return (
        <section className={styles.sectionConteiner}>
            <p className={styles.description}>Każda sesja to indywidualna historia - dopasowana do Ciebie, Twoich emocji i oczekiwań. Sprawdź, co mogę dla Ciebie sfotografować i wybierz coś dla siebie.</p>
            <OffersList offers={offers || []} />
        </section>
    );
};

export default Offers;