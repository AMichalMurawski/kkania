import React from "react";
import styles from "./OfferDetails.module.css";
import { IconSVG } from "../../elements";
import { ContentProps } from "../../utils";

const OfferDetails: React.FC<ContentProps> = ({ type, text }) => {
    if (type === 'list') {
        return (
            <ul className={styles.list}>
                {text.map((item, i) =>
                    <li key={i} className={styles.listItem}>
                        <IconSVG name="image" alt="ikona zdjęcia" size='1em' />
                        <p>{item}</p>
                    </li>
                )}
            </ul>
        );
    };

    return (
        <div>
            {text.map((item, i) =>
                <p key={i}>{item}</p>
            )}
        </div>
    )

};

export default OfferDetails;