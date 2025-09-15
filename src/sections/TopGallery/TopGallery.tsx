import React from "react";
import styles from "./TopGallery.module.css";
import { useTopGallery } from "../../context/ConfigProviders/TopGalleryProvider";
import { GalleryList, TopSection } from "../../components";
import { LinkTo } from "../../elements";
import { useRoutes, useSiteContent } from "../../context";
import { TopSectionProps } from "../../utils";

const TopGallery: React.FC = () => {
    const { data: gallery } = useTopGallery();
    const { data: routes } = useRoutes();
    const { data: siteContent } = useSiteContent();
    
    const galleryData: TopSectionProps = {
        title: siteContent?.gallery.title || '',
        description: siteContent?.gallery.value || [],
        link: {
            href: routes?.categories.path || "",
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