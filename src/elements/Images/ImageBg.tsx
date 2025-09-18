import { FC } from "react";
import styles from "./ImageBg.module.css";
import { ImageBgProps } from "./types";

const ImageBg: FC<ImageBgProps> = ({ name, fileType }) => {
    return (
        <>
        <div
            className={styles.imageBg}
        >
            <img
                className={styles.image}
                src={`/images/${name}.${fileType}`}
            />
            
            </div>
            </>
    );
};

export default ImageBg;