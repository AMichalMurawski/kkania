export type ImageOrientation = 'landscape' | 'portrait';

export interface ImageProps {
    name: string;
    alt: string;
    orientation: ImageOrientation;
};