import { FC, PropsWithChildren } from "react";
import styles from "./Hero.module.css";
import { HeroProps } from "./types";
import { ImageBg } from "../../elements";

const Hero: FC<PropsWithChildren<HeroProps>> = ({ children, imageName, imageType, heroTitle }) => {
    return <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
            <div className={styles.content}>
                {children
                    ? children 
                    : <h2 className={styles.title}>{heroTitle}</h2>
                }
            </div>
        </div>
        <div className={styles.heroBackground}>
            <ImageBg name={imageName} fileType={imageType} />
        </div>
    </section>
};

export default Hero;