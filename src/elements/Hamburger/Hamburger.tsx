import { FC, useEffect } from "react";
import styles from "./Hamburger.module.css";
import { HamburgerProps } from "./types";
import { useModal } from "../../context";
import { useWindowWidth } from "../../hooks";

const Hamburger: FC<HamburgerProps> = ({darkStyle}) => {
    const { close, modals, open } = useModal();
    const width = useWindowWidth();

    useEffect(() => {
        if (width >= 840) {
            close("MenuMobile");
        };
    }, [width])

    const handleClick = () => {
        if (modals.MenuMobile) {
            close('MenuMobile')
            return
        }

        open('MenuMobile')
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