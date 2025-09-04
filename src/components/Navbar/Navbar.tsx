import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ menuList, style='light' }) => {
    const [active, setActive] = useState<string>("Strona główna")

    const handleChange = (value: string) => {
        console.log('value:', value)
        setActive(value)
    }

    console.log('active:', active);

    return <nav>
        <ul className={`${styles.list} ${style === 'light' ? styles.light : styles.dark}`}>
            {menuList.map(item =>
                <li key={item.label} className={`${styles.item} ${active === item.label ? styles.active : null}`} onClick={() => handleChange(item.label)}>
                    <a>{item.label}</a>
                </li>
            )}
        </ul>
    </nav>
};

export default Navbar;