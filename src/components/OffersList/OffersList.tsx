import React from "react";
import styles from "./OffersList.module.css";
import { OffersListProps } from "./types";
import { OfferItem } from "../";

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
    return (
        <div className={styles.offersList}>
            {offers?.map(offer =>
                <OfferItem key={offer.top} offer={offer} />
            )}
        </div>
    );
};

export default OffersList;