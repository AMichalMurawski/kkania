import React from "react";
import styles from "./Image.module.css";
import { ImageComponentProps } from "./types";

const Image: React.FC<ImageComponentProps> = ({url, alt="", orientation}) => {
    return (
        <div className={`${styles.wraper} 
            ${orientation === 'landscape' ? styles.landscape : null}
            ${orientation === 'portrait' ? styles.portrait : null}
            ${orientation !== 'landscape' && orientation !== 'portrait' ? styles.parentSize : null}`}
        >
            <img
                src={`/images/${url}`}
                alt={alt}
                loading="lazy"
            />
        </div>
    );
};

export default Image;