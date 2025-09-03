import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";

const Link: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <a className={styles.link}>
            {children}
        </a>
    );
};

export default Link;