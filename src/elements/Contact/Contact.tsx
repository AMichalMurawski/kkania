import React, { PropsWithChildren } from "react";
import styles from "./Contact.module.css";
import { ContactProps } from "./types";
import LinkTo from "../Links/LinkTo";
import IconSVG from "../Icons/IconSVG";

const Contact: React.FC<PropsWithChildren<ContactProps>> = ({children, href = "", iconName="", style="light" }) => {
    return (
        <LinkTo href={href} style={style} >
            <span className={`${styles.contact}`}>
                <IconSVG name={iconName} size='1.3em'/>
                {children}
            </span>
        </LinkTo>
    );
};

export default Contact;