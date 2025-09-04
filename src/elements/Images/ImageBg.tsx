import React from "react";
import styles from "./ImageBg.module.css";
import { ImageBgProps } from "./types";

const ImageBg: React.FC<ImageBgProps> = ({name, alt=''}) => {
    return (
        <div
            className={styles.imageBg}
            style={{backgroundImage: `url(/images/${name})`}}
        />
    )
}

export default ImageBg;