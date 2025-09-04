import React from "react";
import styles from './SocialIcon.module.css';
import IconSVG from "./IconSVG";
import { SocialIconProps } from "./types";

const SocialIcon: React.FC<SocialIconProps> = ({ name, style = 'light', alt = '' }) => {
    return (
        <div className={`${styles.icon} ${style === 'light' ? styles.iconLight : styles.iconDark}`}>
            <IconSVG name={name} size='2rem' alt={alt} />
        </div>
    );
};

export default SocialIcon;