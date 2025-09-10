import React, { PropsWithChildren } from "react";
import styles from "./Hero.module.css";
import { HeroProps } from "./types";
import { ImageBg } from "../../elements";

const Hero: React.FC<PropsWithChildren<HeroProps>> = ({ children, imageUrl }) => {
    return <section className={styles.heroConteiner}>
        <div className={styles.heroWrapper}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
        <div className={styles.heroBackground}>
            <ImageBg name={imageUrl} />
        </div>
    </section>
};

export default Hero;