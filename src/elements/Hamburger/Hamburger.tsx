import React, { useEffect, useState } from "react";
import styles from "./Hamburger.module.css";
import { HamburgerProps } from "./types";
import { useModal } from "../../context";
import { useWindowWidth } from "../../hooks";

const Hamburger: React.FC<HamburgerProps> = ({darkStyle}) => {
    const { close, modals, toggle } = useModal();
    const width = useWindowWidth();

    useEffect(() => {
        width >= 840 ? close("MenuMobile") : null
    }, [width])
    
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