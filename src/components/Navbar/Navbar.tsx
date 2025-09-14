import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./types";
import { useModal, useRoutes } from "../../context";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = ({ darkStyle, flexDirection = 'row' }) => {
    const { data: routes } = useRoutes();
    const location = useLocation();
    const { close } = useModal();

    const navRoutes = routes ? Object.values(routes).filter((r: any) => r.navbar) : [];
    const currentPath = "/" + location.pathname.split("/")[1];

    const handleClick = () => {
        document.body.style.overflow = "auto";
        close("MenuMobile")
    }

    return <nav>
        <ul
            className={`${styles.list} ${darkStyle ? styles.dark : styles.light}`}
            style={{ flexDirection }}
        >
            {navRoutes.map((route: any) =>
                <li className={`${styles.item} ${currentPath === route.path ? styles.active : null}`}>
                    <Link
                        key={route.path}
                        to={route.path}
                        style={flexDirection === 'column' ? { textAlign: 'center' } : {}}
                        onClick={handleClick}
                    >
                        {route.navbar}
                    </Link>
                </li>
            )}
        </ul>
    </nav>
};

export default Navbar;