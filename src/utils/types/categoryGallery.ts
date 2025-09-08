import { ImageProps } from "./image";

export interface CategoryGalleryProps {
    name: string;
    session: string;
    title: string;
    description: string;
    composition: number;
    imagesPreview: ImageProps[];
    images: ImageProps[];
}