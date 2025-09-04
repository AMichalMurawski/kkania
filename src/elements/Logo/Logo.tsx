import React from "react";
import styles from "./Logo.module.css";
import LogoIcon from "../Icons/LogoIcon";
import { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = ({size= '1rem', style='light', withoutText=false}) => {
    return (
        <div style={{fontSize: size}} className={`${styles.wraper} ${style === 'light' ? styles.light : styles.dark}`}>
            <LogoIcon />
            {!withoutText && (
                <div className={styles.name}>
                    <p>Katarzyna</p>
                    <p>Kania</p>
                    <p>fotografia</p>
                </div>
            )}
        </div>
    )
};

export default Logo;