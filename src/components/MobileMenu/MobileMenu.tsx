import React from "react";
import styles from "./MobileMenu.module.css";
import { Contacts, Navbar } from "../";
import { useModal } from "../../context";

const MobileMenu: React.FC = () => {
    const { modals } = useModal()
    
    return (
        <div className={`${styles.conteiner} ${modals.MenuMobile ? styles.active : null}`}>
            <div className={styles.menuWrapper}>
                <Navbar flexDirection="column" />
            </div>
            <div className={styles.contactsWrapper}>
                <Contacts darkStyle />
            </div>
        </div>
    );
};

export default MobileMenu;