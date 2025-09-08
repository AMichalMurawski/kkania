import React from "react";
import styles from "./MobileMenu.module.css";
import { Contacts, Navbar } from "../";
import { MobileMenuProps } from "./types";

const MobileMenu: React.FC<MobileMenuProps> = ({menuList}) => {
    return (
        <div className={styles.conteiner}>
            <div className={styles.menuWrapper}>
                <Navbar menuList={menuList} flexDirection="column"/>
            </div>
            <div className={styles.contactsWrapper}>
                <Contacts style="dark"/>
            </div>
        </div>
    );
};

export default MobileMenu;