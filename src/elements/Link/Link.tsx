import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import { LinkProps } from "./types";

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ children, href = '', style = 'light' }) => {
    return (
        <a
            className={`${styles.link} ${style === 'light' ? styles.linkLight : styles.linkLight}`}
            href={href}
        >{children}</a>
    )
};

export default Link;