import React from "react";
import styles from './SocialIcon.module.css';
import { IconSVG, Link } from "../";
import { SocialIconProps } from "./types";

const SocialIcon: React.FC<SocialIconProps> = ({ name, style = 'light', alt = '', href='' }) => {
    return (
        <Link href={href} anotherSite>
            <div className={`${styles.icon} ${style === 'light' ? styles.iconLight : styles.iconDark}`}>
                <IconSVG name={name} size='2rem' alt={alt} />
            </div>
        </Link>
    );
};

export default SocialIcon;