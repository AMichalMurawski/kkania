import { FC } from "react";
import styles from "./Image.module.css";
import { ImageComponentProps } from "./types";

const Image: FC<ImageComponentProps> = ({ name, fileType, alt="", orientation, srcSet=false}) => {
    return (
        <div className={`${styles.wraper} 
            ${orientation === 'landscape' ? styles.landscape : null}
            ${orientation === 'portrait' ? styles.portrait : null}
            ${orientation !== 'landscape' && orientation !== 'portrait' ? styles.parentSize : null}`}
        >
            {srcSet &&
                <img
                    srcSet={`
                        /images/${name}-1200.${fileType} 1200w,
                        /images/${name}-768.${fileType} 768w,
                        /images/${name}-480.${fileType} 480w
                    `}
                    src={`/images/${name}.${fileType}`}
                    alt={alt}
                    loading="lazy"
                />
            }
            {!srcSet &&
                <img
                    src={`/images/${name}.${fileType}`}
                    alt={alt}
                    loading="lazy"
                />
            }
        </div>
    );
};

export default Image;