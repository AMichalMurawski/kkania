import React, { PropsWithChildren } from "react";
import styles from "./LinkTo.module.css";
import { LinkToProps } from "./types";

const LinkTo: React.FC<PropsWithChildren<LinkToProps>> = ({ children, href = '', ariaLabel, darkStyle }) => {
    return (
        <a
            href={href}
            aria-label={ariaLabel}
            className={`${styles.linkTo} ${darkStyle ? styles.dark : styles.light}`}
        >{children}</a>
    )
};

export default LinkTo;