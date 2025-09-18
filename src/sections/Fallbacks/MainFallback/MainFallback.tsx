import React from "react";
import styles from "./MainFallback.module.css";
import { IconSVG } from "../../../elements";

const Fallback: React.FC = () => {
    return (
        <div className={styles.fallbackConteiner}>
            <div className={styles.fallbackWrapper}>
                <div className={styles.polaroidWrapper}>
                    <IconSVG name="polaroid" fill="var(--color-secondary)" />
                    <div className={styles.flash}></div>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.image}>
                        <div className={styles.imageView}>
                            <div className={styles.polaroidWrapper}>
                                <IconSVG name="polaroid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fallback;