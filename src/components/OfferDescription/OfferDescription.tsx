import { FC } from "react";
import styles from "./OfferDescription.module.css";
import { OfferDescriptionProps } from "./types";
import { OfferDetails } from "../";

const OfferDescription: FC<OfferDescriptionProps> = ({ offer, darkStyle }) => {
  return (
    <div
      className={`${styles.conteiner} ${
        darkStyle ? styles.dark : styles.light
      }`}
    >
      <h2>{offer?.title}</h2>
      <>
        {offer?.description.map((description, i) => (
          <p key={i}>{description}</p>
        ))}
      </>
      <p className={styles.listTitle}>Co obejmuje:</p>
      <OfferDetails
        type={offer?.details.type || "list"}
        text={offer?.details.text || []}
      />
      <p className={styles.listTitle}>Dlaczego warto?</p>
      <OfferDetails
        type={offer?.whyChoose.type || "list"}
        text={offer?.whyChoose.text || []}
      />
    </div>
  );
};

export default OfferDescription;
