import React from "react";
import { useGalleries, useRoutes } from "../../context";
import { Gallery, Hero } from "../../sections";
import { GalleryProps } from "../../utils";
import { useLocation } from "react-router-dom";

const GalleryPage: React.FC = () => {
    const location = useLocation();
    const { data: galleries } = useGalleries();

    const galleryName = location.pathname.split("/").pop();
    const galleryIndex: number = galleries?.findIndex(gallery =>
        gallery.name === galleryName
    ) ?? -1;
    const previous: { value: string; url: string} | null = galleries && galleryIndex > 0 ? {
        value: galleries?.[galleryIndex - 1].title,
        url: galleries?.[galleryIndex - 1].name
    } : null
    const next: { value: string; url: string } | null = galleries && galleryIndex < (galleries?.length - 1) ? {
        value: galleries?.[galleryIndex + 1].title,
        url: galleries?.[galleryIndex + 1].name
    } : null

    return (
        <>
            <Hero imageUrl={galleries?.[galleryIndex].heroImage || ""} heroTitle={galleries?.[galleryIndex].title} />
            {galleries && <Gallery gallery={galleries[galleryIndex]} previous={previous} next={next}/>}
        </>
    )
};

export default GalleryPage;