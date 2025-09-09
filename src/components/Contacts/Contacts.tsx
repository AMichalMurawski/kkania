import React from "react";
import styles from "./Contacts.module.css";
import { Contact } from "../../elements";
import { ContactsProps } from "./types";
import { useSiteInfo } from "../../context";

const Contacts: React.FC<ContactsProps> = ({ darkStyle }) => {
    const { data: siteInfo } = useSiteInfo();

    return (
        <div className={styles.wrapper}>
            <Contact iconName="phone" href={siteInfo?.phone[0] || ""} darkStyle={darkStyle}>{siteInfo?.phone[1]}</Contact>
            <Contact iconName="envelop" href={siteInfo?.email[0] || ""} darkStyle={darkStyle}>{siteInfo?.email[1]}</Contact>
        </div>
    );
};

export default Contacts;