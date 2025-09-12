import React, { useEffect, useRef, useState } from "react";
import styles from "./OfferItem.module.css";
import { Button, IconSVG } from "../../elements";
import { OfferItemProps } from "./types";
import { useRoutes } from "../../context";
import OfferDetails from "../OfferDetails/OfferDetails";

const OfferItem: React.FC<OfferItemProps> = ({ offer, active = false }) => {
    const { data: routes } = useRoutes();

    return (
        <div className={`${styles.conteiner} ${active ? styles.active : null}`}>
            <h3>{offer.title}</h3>
            <p className={styles.description}>{offer.description}</p>
            <p className={styles.price}>{offer.price} zł</p>
            <Button darkStyle view="full" linkTo={`${routes?.offers.path}?plan=${offer.name}#offersDescription` || ""}>Sprawdź szczegóły</Button>
            <OfferDetails details={offer.details} />
            <Button view="full" linkTo={`${routes?.order.path}?plan=${offer.name}` || ""}>Zapytaj o termin</Button>
        </div>
    );
};

export default OfferItem;