export interface ImageProps {
    name: string;
    alt?: string;
    orientation?: 'landscape' | 'portrait';
}

export interface ImageBgProps extends Omit<ImageProps, 'orientation'> {}