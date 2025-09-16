import React from "react";
import styles from "./ModalImages.module.css";
import { IconSVG, Image } from "../../../elements";
import { ModalImagesProps } from "./types";
import { useModal } from "../../../context";

const ModalImages: React.FC<ModalImagesProps> = ({ images }) => {
    const { close, modals, activeImageIndex, setActiveImageIndex } = useModal();
    const currentImage = images?.[activeImageIndex]

    if (!modals.ImageModal) return null;
    if (!currentImage) return null;

    const backdropExit = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;
        close("ImageModal");
    }

    const handleExit = () => close("ImageModal")

    const changeImage = (e: any, direction: "next" | "prev") => {
        let newIndex =
            direction === 'next'
                ? activeImageIndex + 1
                : activeImageIndex - 1;
        if (newIndex === images.length) newIndex = 0;
        if (newIndex < 0) newIndex = images.length - 1;
        setActiveImageIndex(newIndex);
    }

    return (
        <div className={styles.modalConteiner} onClick={e => backdropExit(e)}>
            <div className={styles.modalWrapper} onClick={e => backdropExit(e)}>
                <div className={styles.sign + " " + styles.rotate} onClick={(e) => changeImage(e, 'prev')}>
                    <IconSVG name="play" fill="var(--color-primary)" size="60%" />
                </div>
                <div className={styles.imageWrapper} style={currentImage.orientation === 'landscape' ? { aspectRatio: '3 / 2'} : {aspectRatio: '2 / 3'}} >
                    <Image url={`${currentImage.url}`} alt={currentImage.alt || ""} orientation={currentImage.orientation || "landscape"} />
                </div>
                <div className={styles.sign} onClick={(e) => changeImage(e, 'next')}>
                    <IconSVG name="play" fill="var(--color-primary)" size="60%" />
                </div>
            </div>
            <div className={styles.iconWrapper} onClick={handleExit}>
                <IconSVG name="cross" fill="var(--color-accent)" size="4svw" />
            </div>
        </div>
    );
};

export default ModalImages;