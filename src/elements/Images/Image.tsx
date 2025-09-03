import React from "react";
import styles from "./Image.module.css";
import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({name, alt="", orientation}) => {
    return (
        <div className={`${styles.wraper} 
            ${orientation === 'landscape' ? styles.landscape : null}
            ${orientation === 'portrait' ? styles.portrait : null}
            ${orientation !== 'landscape' && orientation !== 'portrait' ? styles.parentSize : null}`}
        >
            <img src={`/images/${name}`} alt={alt} />
        </div>
    );
};

export default Image;