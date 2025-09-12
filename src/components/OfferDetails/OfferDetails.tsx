import React from "react";
import styles from "./OfferDetails.module.css";
import { IconSVG } from "../../elements";

const OfferDetails: React.FC<{details: string[]}> = ({details}) => {
    return (
        <ul className={styles.list}>
            {details.map((detail, i) =>
                <li key={i} className={styles.listItem}>
                    <IconSVG name="image" alt="ikona zdjęcia" size='1em' />
                    <p>{detail}</p>
                </li>
            )}
        </ul>
    );
};

export default OfferDetails;