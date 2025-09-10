export type ImageOrientation = 'landscape' | 'portrait';

export interface ImageProps {
    url: string;
    alt: string;
    orientation: ImageOrientation;
};