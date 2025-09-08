import React from "react";
import styles from "./OfferDescription.module.css";
import { OfferDescriptionProps } from "./types";
import { IconSVG } from "../../elements";

const OfferDescription: React.FC<OfferDescriptionProps> = ({offer, darkStyle}) => {
    return (
        <div className={`${styles.conteiner} ${darkStyle ? styles.dark : styles.light}`}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p className={styles.price}>{offer.price} zł</p>
            <ul className={styles.detailsList}>
                {offer.details.map((detail, i) => 
                    <li key={i} className={styles.detail}>
                        <IconSVG name="image" alt="ikona zdjęcia" size='2em' />
                        <p><span className={styles.heading}>{detail.heading}</span> - <span>{detail.value}</span></p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default OfferDescription;