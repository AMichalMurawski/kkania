import { FC } from "react";
import styles from "./TopGallery.module.css";
import { useTopGallery } from "../../context/ConfigProviders/TopGalleryProvider";
import { GalleryList, ModalImages, TopSection } from "../../components";
import { useRoutes, useSiteContent } from "../../context";
import { TopSectionProps } from "../../utils";

const TopGallery: FC = () => {
    const { data: gallery } = useTopGallery();
    const { data: routes } = useRoutes();
    const { data: siteContent } = useSiteContent();
    
    const galleryData: TopSectionProps = {
        title: siteContent?.gallery.title || '',
        description: siteContent?.gallery.value || [],
        link: {
            href: routes?.categories.path || '',
            value: siteContent?.gallery.button || '',
        }
    }

    return (
        <>
            <section className={styles.topGalleryConteiner}>
                <TopSection {...galleryData}>
                    <GalleryList images={gallery || []} />
                </TopSection>
            </section>
            <ModalImages images={gallery || []} />
        </>
    );
};

export default TopGallery;