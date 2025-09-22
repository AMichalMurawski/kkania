import { FC } from "react";
import styles from "./Offers.module.css";
import { useOffers } from "../../context";
import { OffersList } from "../../components";
import { OffersProps } from "./types";

const Offers: FC<OffersProps> = ({content}) => {
    const { data: offers } = useOffers();

    return (
        <section className={`container ${styles.sectionContainer}`}>
            <p className={styles.description}>{content}</p>
            <OffersList offers={offers || []} />
        </section>
    );
};

export default Offers;