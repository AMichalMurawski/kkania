import { ImageOrientation } from "../";

export interface AboutMeContent {
    title: string;
    value: string[];
    imageUrl: string;
    imageAlt: string;
    imageOrientation: ImageOrientation;
}