import React from "react";
import styles from "./TopOffers.module.css";
import { useOffers, useRoutes } from "../../context";
import { TopSectionProps } from "../../utils";
import { OfferItem, TopSection } from "../../components";

const TopOffers: React.FC = () => {
    const { data: routes } = useRoutes();
    const { data: offers } = useOffers();

    const topOffers = offers
        ?.filter(offer => typeof offer.top === "number")
        .sort((a, b) => (a.top ?? Infinity) - (b.top ?? Infinity))
        .slice(0, 4);
        
    const offersData: TopSectionProps = {
        title: 'Moje propozycje',
        description: [
            'Każda sesja to indywidualna historia – dopasowana do Ciebie, Twoich emocji i oczekiwań. Sprawdź, co mogę dla Ciebie sfotografować i wybierz coś dla siebie.'
        ],
        link: {
            href: routes?.offers.path || "",
            value: 'Sprawdź pozostałe oferty&nbsp;&nbsp;&nbsp;&gt;'
        }
    }

    return (
        <section className={styles.sectionConteiner}>
            <TopSection {...offersData}>
                <div className={styles.offersList}>
                    {topOffers?.map(offer => 
                        <OfferItem key={offer.top} offer={offer}/>
                    )}
                </div>
            </TopSection>
        </section>
    );
};

export default TopOffers;