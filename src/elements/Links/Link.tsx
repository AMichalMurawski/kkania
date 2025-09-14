import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import { LinkProps } from "./types";

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ children, href='', ariaLabel, anotherSite=false }) => {
    return (
        <a href={href} aria-label={ariaLabel} className={styles.link} {...(anotherSite ? { target: '_blank', rel: 'noopener noreferrer'} : {})}>
            {children}
        </a>
    );
};

export default Link;