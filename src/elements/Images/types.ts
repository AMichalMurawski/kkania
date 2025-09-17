import { ImageProps } from "../../utils/types/image";

export interface ImageComponentProps extends ImageProps {
    srcSet?: boolean;
}

export interface ImageBgProps extends Omit<ImageProps, 'orientation' | 'alt' > {}