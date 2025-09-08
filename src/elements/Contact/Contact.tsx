import React, { PropsWithChildren } from "react";
import styles from "./Contact.module.css";
import { ContactProps } from "./types";
import { IconSVG, LinkTo } from "../";

const Contact: React.FC<PropsWithChildren<ContactProps>> = ({children, href = "", iconName="", darkStyle }) => {
    return (
        <LinkTo href={href} darkStyle={darkStyle} >
            <span className={`${styles.contact}`}>
                <IconSVG name={iconName} size='1.3em'/>
                {children}
            </span>
        </LinkTo>
    );
};

export default Contact;