import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import { LinkProps } from "./types";
import { Link as RouterLink } from "react-router-dom";

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ children, href = '', ariaLabel, anotherSite = false }) => {
    
    if (anotherSite) {
        return (
            <a
                href={href}
                aria-label={ariaLabel}
                className={styles.link}
                target='_blank'
                rel='noopener noreferrer'
            >
                {children}
            </a>
        );
    };

    return (
        <RouterLink to={href} aria-label={ariaLabel} className={styles.link}>
            {children}
        </RouterLink>
    );
};

export default Link;