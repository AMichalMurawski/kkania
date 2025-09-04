import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import { LinkProps } from "./types";

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ children, href='' }) => {
    return (
        <a href={href} className={styles.link}>
            {children}
        </a>
    );
};

export default Link;