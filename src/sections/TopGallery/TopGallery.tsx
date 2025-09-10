import React from "react";
import styles from "./TopGallery.module.css";
import { useTopGallery } from "../../context/ConfigProviders/TopGalleryProvider";
import { GalleryList } from "../../components";
import { LinkTo } from "../../elements";
import { useRoutes } from "../../context";

const TopGallery: React.FC = () => {
    const { data: gallery } = useTopGallery();
    const {data: routes} = useRoutes()

    return (
        <section className={styles.topGalleryConteiner}>
                <div className={styles.content}>
                    <h2>Moje kadry</h2>
                    <p>Każde zdjęcie, które tworzę, to zatrzymany moment pełen emocji i prawdziwych historii. Lubię łapać detale, spojrzenia i ulotne chwile, które często umykają w codziennym biegu.</p>
                    <p>Moje kadry mają być pamiątką, do której będziesz wracać z uśmiechem i ciepłem w sercu.</p>
                </div>
                <GalleryList images={gallery || []}/>
                <LinkTo href={routes?.gallery.path || ""}>Poznaj inne moje kadry&nbsp;&nbsp;&nbsp;&gt;</LinkTo>
        </section>
    );
};

export default TopGallery;