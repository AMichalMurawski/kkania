import React from "react";
import styles from "./Gallery.module.css";
import { GalleryList } from "../../components";
import { GallerySectionProps } from "./types";
import { Link } from "../../elements";
import { useOffers, useRoutes } from "../../context";
import he from "he";

const Gallery: React.FC<GallerySectionProps> = ({ gallery, previous, next }) => {
    const { data: routes } = useRoutes();
    const { data: offers } = useOffers();

    const offerName = offers?.find(offer => offer.name === gallery.session)?.title

    return (
        <section className={styles.sectionConteiner}>
            <div className={styles.sectionWrapper}>
                <div className={styles.content}>
                    <p>{gallery.description}</p>
                    <p className={styles.linkWrapper}>
                        <Link href={`${routes?.offers.path}?plan=${gallery.session}`} >{offerName}</Link>
                    </p>
                </div>
                <GalleryList images={gallery.images} />
                <div className={styles.linksConteiner}>
                    {previous && <div><Link href={`${routes?.categories.path}/${previous?.url}`} >{he.decode('&lt;&nbsp;&nbsp;&nbsp;')}{previous.value}</Link></div>}
                    {next && <div><Link href={`${routes?.categories.path}/${next?.url}`} >{next.value}{he.decode('&nbsp;&nbsp;&nbsp;&gt;')}</Link></div>}
                </div>
            </div>
        </section>
    );
};

export default Gallery;