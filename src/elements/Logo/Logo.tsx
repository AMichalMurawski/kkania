import { FC } from "react";
import styles from "./Logo.module.css";
import { LogoIcon } from "../";
import { LogoProps } from "./types";
import { useNavigate } from "react-router-dom";

const Logo: FC<LogoProps> = ({ size = '1rem', darkStyle, withoutText = false, homePath = false }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (!homePath) return 
        navigate("/")
    };

    return (
        <div
            style={{ fontSize: size }}
            className={`${styles.wraper} ${darkStyle ? styles.dark : styles.light} ${homePath ? styles.homePath : null}`}
            onClick={handleNavigate}
        >
            <LogoIcon />
            {!withoutText && (
                <div className={styles.name}>
                    <p>Katarzyna</p>
                    <p>Kania</p>
                    <p>fotografia</p>
                </div>
            )}
        </div>
    );
};

export default Logo;