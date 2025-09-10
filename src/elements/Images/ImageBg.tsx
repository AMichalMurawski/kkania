import React from "react";
import styles from "./ImageBg.module.css";
import { ImageBgProps } from "./types";

const ImageBg: React.FC<ImageBgProps> = ({url}) => {
    return (
        <div
            className={styles.imageBg}
            style={{backgroundImage: `url(/images/${url})`}}
        />
    )
}

export default ImageBg;