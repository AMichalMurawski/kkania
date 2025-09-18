import { FC } from "react";
import styles from "./Logo.module.css";
import { LogoIcon } from "../";
import { LogoProps } from "./types";

const Logo: FC<LogoProps> = ({size= '1rem', darkStyle, withoutText=false}) => {
    return (
        <div style={{fontSize: size}} className={`${styles.wraper} ${darkStyle ? styles.dark : styles.light}`}>
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