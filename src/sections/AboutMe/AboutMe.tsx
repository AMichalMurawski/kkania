import React from "react";
import styles from "./AboutMe.module.css";
import { AboutMeProps, FlexDirection } from "./types";
import { IconSVG, Image } from "../../elements";
import { useWindowWidth } from "../../hooks";

const AboutMe: React.FC<AboutMeProps> = ({ content, flexDirection }) => {
    const width = useWindowWidth();

    return (
        <section className={styles.aboutMeConteiner}>
            {content.map((item, i) => {
                let direction: FlexDirection = flexDirection[0];
                if (width > 768) direction = flexDirection[1];
                if (width > 1200) direction = flexDirection[2];
                
                if (direction === 'column') return (
                    <div key={i} className={styles.itemWrapper}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.title}>
                                <IconSVG name="camera" size="2em" fill="var(--color-secondary)" />
                                <h2>{item.title}</h2>
                            </div>
                            {item.image && <div className={styles.imageWrapper} style={item.image.orientation === "landscape" ? { aspectRatio: '3 / 2' } : { aspectRatio: '2 / 3' }}>
                                <Image url={item.image.url} alt={item.image.alt} orientation={item.image.orientation} />
                            </div>}
                            {item.value.map((val, j) =>
                                <p key={`val${j}`}>{val}</p>
                            )}
                        </div>
                    </div>
                )

                if (direction === 'row') return (
                    <div key={i} className={styles.itemWrapper}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.title}>
                                <IconSVG name="camera" size="2em" fill="var(--color-secondary)" />
                                <h2>{item.title}</h2>
                            </div>
                            {item.value.map((val, j) =>
                                <p key={`val${j}`}>{val}</p>
                            )}
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image url={item.image.url} alt={item.image.alt} orientation={item.image.orientation} />
                        </div>
                    </div>
                )
            })}
        </section>
    );
};

export default AboutMe;