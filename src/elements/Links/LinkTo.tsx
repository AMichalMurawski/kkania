import React, { PropsWithChildren } from "react";
import styles from "./LinkTo.module.css";
import { LinkProps } from "./types";

const LinkTo: React.FC<PropsWithChildren<LinkProps>> = ({ children, href = '', style = 'light' }) => {
    return (
        <a
            className={`${styles.linkTo} ${style === 'light' ? styles.linkToLight : styles.linkToDark}`}
            href={href}
        >{children}</a>
    )
};

export default LinkTo;