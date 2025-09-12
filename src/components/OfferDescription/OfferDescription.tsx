import React from "react";
import styles from "./OfferDescription.module.css";
import { OfferDescriptionProps } from "./types";
import { OfferDetails } from "../";

const OfferDescription: React.FC<OfferDescriptionProps> = ({offer, darkStyle}) => {
    return (
        <div className={`${styles.conteiner} ${darkStyle ? styles.dark : styles.light}`}>
            <h2>{offer?.title}</h2>
            <p>{offer?.description}</p>
            <p className={styles.price}>{offer?.price} zł</p>
            <p className={styles.listTitle}>Co obejmuje:</p>
            <OfferDetails details={offer?.details || []}/>
            <p className={styles.listTitle}>Dlaczego warto?</p>
            <OfferDetails details={offer?.whyChoose || []}/>
        </div>
    );
};

export default OfferDescription;