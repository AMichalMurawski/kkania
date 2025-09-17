import React from "react";
import styles from "./ImageBg.module.css";
import { ImageBgProps } from "./types";

const ImageBg: React.FC<ImageBgProps> = ({ name, fileType }) => {
    return (
        <>
            <img
                src={`/images/${name}.${fileType}`}
                style={{ display: 'none' }}
            />
            <div
                className={styles.imageBg}
                style={{ backgroundImage: `url(/images/${name}.${fileType})` }}
            />
        </>
    );
};

export default ImageBg;