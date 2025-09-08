import React, { PropsWithChildren } from "react";
import styles from "./LinkTo.module.css";
import { LinkToProps } from "./types";

const LinkTo: React.FC<PropsWithChildren<LinkToProps>> = ({ children, href = '', darkStyle }) => {
    return (
        <a
            className={`${styles.linkTo} ${darkStyle ? styles.dark : styles.light}`}
            href={href}
        >{children}</a>
    )
};

export default LinkTo;