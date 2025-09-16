import { ImageProps } from "./image";

export interface GalleryProps {
    name: string;
    session: string;
    heroImageName: string;
    heroImageType: string;
    title: string;
    description: string;
    composition: number;
    imagesPreview: ImageProps[];
    images: ImageProps[];
}