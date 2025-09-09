import React, { useState } from "react";
import styles from "./Hamburger.module.css";
import { HamburgerProps } from "./types";
import { useModal } from "../../context";

const Hamburger: React.FC<HamburgerProps> = ({darkStyle}) => {
    const { modals, toggle } = useModal();
    
    return (
        <div
            className={`${styles.wraper} ${modals.MenuMobile ? styles.exit : null} ${darkStyle ? styles.dark : styles.light}`}
            onClick={() => toggle('MenuMobile')}
        >
            <div />
            <div />
            <div />
        </div>
    );
};

export default Hamburger;