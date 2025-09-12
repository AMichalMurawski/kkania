import { GalleryProps } from "../../utils";

interface GalleryLink {
    value: string;
    url: string;
}

export interface GallerySectionProps {
    gallery: GalleryProps;
    previous: GalleryLink | null;
    next: GalleryLink | null;
}