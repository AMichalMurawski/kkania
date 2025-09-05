import React from "react";
import styles from "./Contacts.module.css";
import Contact from "../../elements/Contact/Contact";
import { ContactsProps } from "./types";

const Contacts: React.FC<ContactsProps> = ({ style = 'light' }) => {
    return (
        <div className={styles.wrapper}>
            <Contact iconName="phone" href="" style={style}>(+48) 012 345 678</Contact>
            <Contact iconName="envelop" href="" style={style}>kkania@kkania.pl</Contact>
        </div>
    );
};

export default Contacts;