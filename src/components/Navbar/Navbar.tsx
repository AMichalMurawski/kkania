import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./types";
import { useRoutes } from "../../context";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = ({ darkStyle, flexDirection = 'row' }) => {
    const { data: routes } = useRoutes();
    const location = useLocation();

    const navRoutes = routes ? Object.values(routes).filter((r: any) => r.navbar) : [];

    return <nav>
        <ul
            className={`${styles.list} ${darkStyle ? styles.dark : styles.light}`}
            style={{ flexDirection }}
        >
            {navRoutes.map((route: any) =>
                <Link
                    key={route.path}
                    to={route.path}
                    className={`${styles.item} ${location.pathname === route.path ? styles.active : null}`}
                    style={flexDirection === 'column' ? { textAlign: 'center' } : {}}
                >
                    <li>
                        {route.navbar}
                    </li>
                </Link>
            )}
        </ul>
    </nav>
};

export default Navbar;