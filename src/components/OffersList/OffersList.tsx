import React from "react";
import styles from "./OffersList.module.css";
import { OffersListProps } from "./types";
import { OfferItem } from "../";
import { asString, useValidatedQuery } from "../../hooks/useValidateQuery";

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
    const { plan } = useValidatedQuery({
        plan: asString
    });

    return (
        <div className={styles.offersList}>
            {offers?.map(offer =>
                <OfferItem key={offer.name} offer={offer} active={offer.name === plan} />
            )}
        </div>
    );
};

export default OffersList;