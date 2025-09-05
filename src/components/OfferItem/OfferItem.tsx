import React, { useEffect, useRef, useState } from "react";
import styles from "./OfferItem.module.css";
import Button from "../../elements/Button/Button";
import IconSVG from "../../elements/Icons/IconSVG";
import { OfferItemProps } from "./types";

const OfferItem: React.FC<OfferItemProps> = ({ offer, active = false }) => {    
    return (
        <div className={`${styles.conteiner} ${active ? styles.active : null}`}>
            <h3>{offer.title}</h3>
            <p className={styles.description}>{offer.description}</p>
            <p className={styles.price}>{offer.price} zł</p>
            <Button style="dark" view="full" linkTo={""}>Sprawdź szczegóły</Button>
            <ul className={styles.detailsList}>
                {offer.details.map((detail, i) => 
                    <li key={i} className={styles.detail}>
                        <IconSVG name="image" alt="ikona zdjęcia" fill="var(--color-accent)" size='1.1em' />
                        {detail.heading}
                    </li>
                )}
            </ul>
            <Button view="full" linkTo={""}>Zapytaj o termin</Button>
        </div>
    );
};

export default OfferItem;