import React from "react";
import styles from "./SecondFallback.module.css";
import { IconSVG } from "../../../elements";

const SecondFallback: React.FC = () => {
    const spinnerElements = new Array(10).fill(null);

    return (
        <div className={styles.fallbackConteiner}>
            <div className={styles.fallbackWrapper}>
                {spinnerElements.map((element, i) => {
                    const rotate = 36 * i;
                    const scale = 0.5 + 0.05 * (i + 1);

                    return (
                        <div
                            className={styles.spinnerElement}
                            style={{
                                transform: `rotate(${rotate}deg) translate(400%, 0) rotate(-${rotate}deg)`,
                            }}
                        >
                            <div
                                className={styles.spinnerIcon}
                                style={{ scale: `${scale}` }}
                            >
                                <IconSVG name="image" fill="var(--color-secondary)" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SecondFallback;