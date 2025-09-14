import { ImageProps } from "../../utils/types/image";

export interface ImageComponentProps extends ImageProps {}

export interface ImageBgProps extends Omit<ImageProps, 'orientation' > {}