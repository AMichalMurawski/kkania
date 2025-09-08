import React from "react";
import styles from "./Contacts.module.css";
import { Contact } from "../../elements";
import { ContactsProps } from "./types";

const Contacts: React.FC<ContactsProps> = ({ darkStyle }) => {
    return (
        <div className={styles.wrapper}>
            <Contact iconName="phone" href="" darkStyle={darkStyle}>(+48) 012 345 678</Contact>
            <Contact iconName="envelop" href="" darkStyle={darkStyle}>kkania@kkania.pl</Contact>
        </div>
    );
};

export default Contacts;