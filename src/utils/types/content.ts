import { ImageProps } from "../";

export interface ContentData {
    title: string;
    value: string[];
}

export interface AboutMeData extends ContentData {
    image: ImageProps;
}

export interface TopData extends ContentData {
    button: string;
}