import React, { useEffect, useRef, useState } from "react";
import styles from "./OfferItem.module.css";
import { Button, IconSVG } from "../../elements";
import { OfferItemProps } from "./types";
import { useRoutes } from "../../context";

const OfferItem: React.FC<OfferItemProps> = ({ offer, active = false }) => {
    const { data: routes } = useRoutes();

    return (
        <div className={`${styles.conteiner} ${active ? styles.active : null}`}>
            <h3>{offer.title}</h3>
            <p className={styles.description}>{offer.description}</p>
            <p className={styles.price}>{offer.price} zł</p>
            <Button darkStyle view="full" linkTo={`${routes?.offers.path}?plan=${offer.name}` || ""}>Sprawdź szczegóły</Button>
            <ul className={styles.detailsList}>
                {offer.details.map((detail, i) => 
                    <li key={i} className={styles.detail}>
                        <IconSVG name="image" alt="ikona zdjęcia" fill="var(--color-accent)" size='1.1em' />
                        {detail}
                    </li>
                )}
            </ul>
            <Button view="full" linkTo={`${routes?.order.path}?offer=${offer.name}` || ""}>Zapytaj o termin</Button>
        </div>
    );
};

export default OfferItem;