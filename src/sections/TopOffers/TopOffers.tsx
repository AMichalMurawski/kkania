import { FC } from "react";
import styles from "./TopOffers.module.css";
import { useOffers, useRoutes, useSiteContent } from "../../context";
import { TopSectionProps } from "../../utils";
import { OffersList, TopSection } from "../../components";
import { TopOffersProps } from "./types";

const TopOffers: FC<TopOffersProps> = ({darkStyle}) => {
    const { data: routes } = useRoutes();
    const { data: offers } = useOffers();
    const { data: siteContent } = useSiteContent();

    const topOffers = offers
        ?.filter(offer => typeof offer.top === "number")
        .sort((a, b) => (a.top ?? Infinity) - (b.top ?? Infinity))
        .slice(0, 4);
        
    const offersData: TopSectionProps = {
        title: siteContent?.offers.title || "",
        description: siteContent?.offers.value || [],
        link: {
            href: routes?.offers.path || "",
            value: siteContent?.offers.button || ''
        }
    }

    return (
        <section className={`${styles.sectionConteiner} ${darkStyle ? styles.dark : null}`}>
            <TopSection {...offersData} darkStyle={darkStyle}>
                <OffersList offers={topOffers || []} />
            </TopSection>
        </section>
    );
};

export default TopOffers;