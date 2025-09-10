import React from "react";
import styles from "./TopGallery.module.css";
import { useTopGallery } from "../../context/ConfigProviders/TopGalleryProvider";
import { GalleryList, TopSection } from "../../components";
import { LinkTo } from "../../elements";
import { useRoutes } from "../../context";
import { TopSectionProps } from "../../utils";

const TopGallery: React.FC = () => {
    const { data: gallery } = useTopGallery();
    const { data: routes } = useRoutes()
    
    const galleryData: TopSectionProps = {
        title: 'Moje kadry',
        description: [
            'Każde zdjęcie, które tworzę, to zatrzymany moment pełen emocji i prawdziwych historii. Lubię łapać detale, spojrzenia i ulotne chwile, które często umykają w codziennym biegu.',
            'Moje kadry mają być pamiątką, do której będziesz wracać z uśmiechem i ciepłem w sercu.'
        ],
        link: {
            href: routes?.gallery.path || "",
            value: "Poznaj inne moje kadry&nbsp;&nbsp;&nbsp;&gt;"
        }
    }

    return (
        <section className={styles.topGalleryConteiner}>
            <TopSection {...galleryData}>
                <GalleryList images={gallery || []} />
            </TopSection>
        </section>
    );
};

export default TopGallery;