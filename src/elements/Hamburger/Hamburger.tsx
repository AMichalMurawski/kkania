import React, { useState } from "react";
import styles from "./Hamburger.module.css";
import { HamburgerProps } from "./types";

const Hamburger: React.FC<HamburgerProps> = ({onClick, darkStyle}) => {
    const [mode, setMode] = useState<boolean>(false)
    
    return (
        <div className={`${styles.wraper} ${mode ? styles.exit : null} ${darkStyle ? styles.dark : styles.light}`} onClick={() => setMode(!mode)}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default Hamburger;