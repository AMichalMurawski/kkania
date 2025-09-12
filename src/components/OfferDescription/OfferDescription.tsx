import React from "react";
import styles from "./OfferDescription.module.css";
import { OfferDescriptionProps } from "./types";
import { IconSVG } from "../../elements";

const OfferDescription: React.FC<OfferDescriptionProps> = ({offer, darkStyle}) => {
    return (
        <div className={`${styles.conteiner} ${darkStyle ? styles.dark : styles.light}`}>
            <h2>{offer?.title}</h2>
            <p>{offer?.description}</p>
            <p className={styles.price}>{offer?.price} zł</p>
            <p className={styles.listTitle}>Co obejmuje:</p>
            <ul className={styles.list}>
                {offer?.details.map((detail, i) => 
                    <li key={i} className={styles.listItem}>
                        <IconSVG name="image" alt="ikona zdjęcia" size='1em' />
                        <p>{detail}</p>
                    </li>
                )}
            </ul>
            <p className={styles.listTitle}>Dlaczego warto?</p>
            <ul className={styles.list}>
                {offer?.whyChoose.map((whyItem, i) => 
                    <li key={i} className={styles.listItem}>
                        <IconSVG name="image" alt="ikona zdjęcia" size='1em' />
                        <p>{whyItem}</p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default OfferDescription;