export type ImageOrientation = 'landscape' | 'portrait';

export interface ImageProps {
    name: string;
    fileType: string;
    alt: string;
    orientation: ImageOrientation;
};