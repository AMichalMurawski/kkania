import React from "react";
import styles from './LogoIcon.module.css';
import IconSVG from "./IconSVG";
import { LogoIconProps } from "./types";

const LogoIcon: React.FC<LogoIconProps> = ({ style = 'light' }) => {
    return (
        <div className={styles.logoConteiner}>
            <div className={`${styles.logo} ${style === 'light' ? styles.logoLight : styles.logoDark}`}>
                <IconSVG name='logo-photo' alt="Logo w kształcie aparatu fotograficznego, którego obiektyw tworzy litery k k" />
            </div>
        </div>
    );
};

export default LogoIcon;