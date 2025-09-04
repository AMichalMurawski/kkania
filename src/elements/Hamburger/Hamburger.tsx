import React, { useState } from "react";
import styles from "./Hamburger.module.css";
import { HamburgerProps } from "./types";

const Hamburger: React.FC<HamburgerProps> = ({onClick, style='light'}) => {
    const [mode, setMode] = useState<boolean>(false)
    
    return (
        <div className={`${styles.wraper} ${mode ? styles.exit : null} ${style === 'light' ? styles.light : styles.dark}`} onClick={() => setMode(!mode)}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default Hamburger;