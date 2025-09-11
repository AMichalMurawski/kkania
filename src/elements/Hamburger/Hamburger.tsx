import React, { useEffect, useState } from "react";
import styles from "./Hamburger.module.css";
import { HamburgerProps } from "./types";
import { useModal } from "../../context";
import { useWindowWidth } from "../../hooks";

const Hamburger: React.FC<HamburgerProps> = ({darkStyle}) => {
    const { close, modals, open, toggle } = useModal();
    const width = useWindowWidth();

    useEffect(() => {
        if (width >= 840) {
            close("MenuMobile");
            document.body.style.overflow = "auto";
        };
    }, [width])

    const handleClick = () => {
        if (modals.MenuMobile) {
            close('MenuMobile')
            document.body.style.overflow = "auto";
            return
        }

        open('MenuMobile')
        document.body.style.overflow = "hidden";
    }
    
    return (
        <div
            className={`${styles.wraper} ${modals.MenuMobile ? styles.exit : null} ${darkStyle ? styles.dark : styles.light}`}
            onClick={handleClick}
        >
            <div />
            <div />
            <div />
        </div>
    );
};

export default Hamburger;