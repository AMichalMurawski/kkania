import { FC } from "react";
import { useGalleries, useRoutes } from "../../context";
import { Gallery, Hero } from "../../sections";
import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ModalImages } from "../../components";

const GalleryPage: FC = () => {
    const { data: routes } = useRoutes();
    const { data: galleries } = useGalleries();
    const { galleryName } = useParams<{ galleryName: string }>();

    const galleryIndex: number = galleries?.findIndex(gallery =>
        gallery.name === galleryName
    ) ?? -1;

    if (galleryIndex === -1) {
        return <Navigate to={routes?.categories.path || "/"} replace />
    }

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
            <Helmet>
                {galleries?.[galleryIndex]
                    && <link rel="preload" as="image" href={`/images/${galleries?.[galleryIndex].heroImageName}.${galleries?.[galleryIndex].heroImageType}`} /> 
                }
                <link rel="preload" as="image" href="/images/hero/hero-gallery.webp" />
            </Helmet>
            <Hero imageName={galleries?.[galleryIndex].heroImageName || ""} imageType={galleries?.[galleryIndex].heroImageType || ""} heroTitle={galleries?.[galleryIndex].title} />
            {galleries &&
                <>
                    <Gallery gallery={galleries[galleryIndex]} previous={previous} next={next} />
                    <ModalImages images={galleries[galleryIndex].images} />
                </>}
        </>
    )
};

export default GalleryPage;