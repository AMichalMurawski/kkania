import { FC } from "react";
import styles from "./OfferItem.module.css";
import { Button } from "../../elements";
import { OfferItemProps } from "./types";
import { useRoutes } from "../../context";
import OfferDetails from "../OfferDetails/OfferDetails";

const OfferItem: FC<OfferItemProps> = ({ offer, active = false }) => {
    const { data: routes } = useRoutes();

    return (
        <div className={`${styles.conteiner} ${active ? styles.active : null}`}>
            <h3>{offer.title}</h3>
            <p className={styles.description}>{offer.description}</p>
            <p className={styles.price}>{offer.price} zł</p>
            <Button darkStyle view="full" linkTo={`${routes?.offers.path}?plan=${offer.name}#offersDescription` || ""}>Sprawdź szczegóły</Button>
            <OfferDetails type={offer.details.type} text={offer.details.text || []} />
            <Button view="full" linkTo={`${routes?.order.path}?plan=${offer.name}#order` || ""}>Zapytaj o termin</Button>
        </div>
    );
};

export default OfferItem;