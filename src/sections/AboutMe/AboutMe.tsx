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
                                <h3>{item.title}</h3>
                            </div>
                            <div className={styles.imageWrapper} style={item.imageOrientation === "landscape" ? {aspectRatio: '3 / 2'} : {aspectRatio: '2 / 3'}}>
                                <Image name={item.imageUrl} alt={item.imageAlt} orientation={item.imageOrientation} />
                            </div>
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
                                <h3>{item.title}</h3>
                            </div>
                            {item.value.map((val, j) =>
                                <p key={`val${j}`}>{val}</p>
                            )}
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image name={item.imageUrl} alt={item.imageAlt} orientation={item.imageOrientation} />
                        </div>
                    </div>
                )
            })}
        </section>
    );
};

export default AboutMe;